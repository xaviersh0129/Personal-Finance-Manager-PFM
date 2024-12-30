import { BaseViewModel } from '../base-view-model';
import { MonthlySnapshot } from '../../models/monthly-snapshot';
import { MonthlySnapshotService } from '../../services/monthly-snapshot-service';
import { EventBusService, EventNames } from '../../services/event-bus-service';
import { Logger } from '../../utils/logger';

const TAG = 'AddSnapshotViewModel';

export class AddSnapshotViewModel extends BaseViewModel {
    private _netAsset: number = 0;
    private _yearIndex: number = 2; // Default to current year (middle of the 5-year range)
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

    get yearIndex(): number { return this._yearIndex; }
    set yearIndex(value: number) {
        if (this._yearIndex !== value) {
            this._yearIndex = value;
            this.notifyPropertyChange('yearIndex', value);
        }
    }

    get selectedYear(): number { return this._years[this._yearIndex]; }

    get selectedMonth(): number { return this._selectedMonth; }
    set selectedMonth(value: number) {
        if (this._selectedMonth !== value) {
            this._selectedMonth = value;
            this.notifyPropertyChange('selectedMonth', value);
        }
    }

    get years(): number[] { return this._years; }
    get months(): string[] { return this._months; }
    get isEditing(): boolean { return !!this._existingSnapshot; }

    private initializeYears() {
        const currentYear = new Date().getFullYear();
        this._years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    }

    private initializeWithExistingSnapshot(snapshot: MonthlySnapshot) {
        this._netAsset = snapshot.netAsset;
        this._yearIndex = this._years.indexOf(snapshot.year);
        this._selectedMonth = snapshot.month;
    }

    onSave() {
        try {
            Logger.debug(TAG, 'Attempting to save snapshot');
            
            if (this._netAsset <= 0) {
                throw new Error('Net asset value must be greater than 0');
            }

            const snapshot = new MonthlySnapshot({
                ...(this._existingSnapshot && { id: this._existingSnapshot.id }),
                year: this.selectedYear,
                month: this._selectedMonth,
                netAsset: this._netAsset
            });

            if (this._existingSnapshot) {
                this._snapshotService.updateSnapshot(snapshot);
                Logger.debug(TAG, `Successfully updated snapshot for ${this._months[this._selectedMonth]} ${this.selectedYear}`);
            } else {
                this._snapshotService.addSnapshot(snapshot);
                Logger.debug(TAG, `Successfully added snapshot for ${this._months[this._selectedMonth]} ${this.selectedYear}`);
            }

            // Emit event before navigating back
            this._eventBus.emit(EventNames.SNAPSHOT_UPDATED);
            this.goBack();
        } catch (error) {
            Logger.error(TAG, 'Error saving snapshot', error as Error);
        }
    }
}