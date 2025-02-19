import { BaseViewModel } from '../base-view-model';
import { MonthlySnapshot } from '../../models/monthly-snapshot';
import { MonthlySnapshotService } from '../../services/monthly-snapshot-service';
import { EventBusService, EventNames } from '../../services/event-bus-service';
import { showDialog } from '../../utils/dialog';
import { Logger } from '../../utils/logger';

const TAG = 'AddSnapshotViewModel';

export class AddSnapshotViewModel extends BaseViewModel {
    private _netAsset: number = 0;
    private _selectedYear: number;
    private _selectedMonth: number;
    private _years: number[] = [];
    private _months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    private _snapshotService: MonthlySnapshotService;
    private _eventBus: EventBusService;
    private _existingSnapshot?: MonthlySnapshot;

    constructor(existingSnapshot?: MonthlySnapshot) {
        super();
        this._snapshotService = MonthlySnapshotService.getInstance();
        this._eventBus = EventBusService.getInstance();
        this._existingSnapshot = existingSnapshot;
        
        const currentDate = new Date();
        this._selectedYear = currentDate.getFullYear();
        this._selectedMonth = currentDate.getMonth();
        
        this.initializeYears();
        
        if (existingSnapshot) {
            this.initializeWithExistingSnapshot(existingSnapshot);
        }
    }

    get netAsset(): number { return this._netAsset; }
    set netAsset(value: number | string) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._netAsset !== numericValue) {
            this._netAsset = numericValue;
            this.notifyPropertyChange('netAsset', numericValue);
        }
    }

    get selectedYear(): number { return this._selectedYear; }
    set selectedYear(value: number) {
        if (this._selectedYear !== value) {
            this._selectedYear = value;
            this.notifyPropertyChange('selectedYear', value);
        }
    }

    get selectedMonth(): number { return this._selectedMonth; }
    set selectedMonth(value: number) {
        if (this._selectedMonth !== value) {
            this._selectedMonth = value;
            this.notifyPropertyChange('selectedMonth', value);
        }
    }

    get years(): number[] { return this._years; }
    get months(): string[] { return this._months; }

    private initializeYears() {
        const currentYear = new Date().getFullYear();
        this._years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    }

    private initializeWithExistingSnapshot(snapshot: MonthlySnapshot) {
        this._netAsset = snapshot.netAsset;
        this._selectedYear = snapshot.year;
        this._selectedMonth = snapshot.month;
    }

    async onSave(): Promise<void> {
        try {
            Logger.debug(TAG, 'Attempting to save snapshot');
            
            if (isNaN(this._netAsset)) {
                throw new Error('Please enter a valid number for net asset value');
            }

            const existing = this._snapshotService.getSnapshots().find(
                s => s.year === this._selectedYear && 
                     s.month === this._selectedMonth &&
                     (!this._existingSnapshot || s.id !== this._existingSnapshot.id)
            );

            if (existing) {
                const result = await showDialog({
                    title: 'Snapshot Exists',
                    message: 'A snapshot already exists for this month. Do you want to update it?',
                    okButtonText: 'Update',
                    cancelButtonText: 'Cancel'
                });

                if (!result) {
                    return;
                }
            }

            const snapshot = new MonthlySnapshot({
                ...(this._existingSnapshot && { id: this._existingSnapshot.id }),
                year: this._selectedYear,
                month: this._selectedMonth,
                netAsset: this._netAsset
            });

            if (this._existingSnapshot) {
                this._snapshotService.updateSnapshot(snapshot);
                Logger.debug(TAG, `Successfully updated snapshot for ${this._months[this._selectedMonth]} ${this._selectedYear}`);
            } else {
                this._snapshotService.addSnapshot(snapshot);
                Logger.debug(TAG, `Successfully added snapshot for ${this._months[this._selectedMonth]} ${this._selectedYear}`);
            }

            this._eventBus.emit(EventNames.SNAPSHOT_UPDATED);
            this.goBack();
        } catch (error) {
            Logger.error(TAG, 'Error saving snapshot', error as Error);
            await showDialog({
                title: 'Error',
                message: error instanceof Error ? error.message : 'Failed to save snapshot',
                okButtonText: 'OK'
            });
        }
    }
}