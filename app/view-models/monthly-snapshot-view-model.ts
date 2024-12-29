import { BaseViewModel } from './base-view-model';
import { MonthlySnapshot } from '../models/monthly-snapshot';
import { MonthlySnapshotService } from '../services/monthly-snapshot-service';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import { showDialog } from '../utils/dialog';
import { Logger } from '../utils/logger';

const TAG = 'MonthlySnapshotViewModel';

export class MonthlySnapshotViewModel extends BaseViewModel {
    private _snapshotService: MonthlySnapshotService;
    private _netAsset: number = 0;
    private _selectedYear: number;
    private _selectedMonth: number;
    private _years: number[] = [];
    private _months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    constructor() {
        super();
        this._snapshotService = MonthlySnapshotService.getInstance();
        const currentDate = new Date();
        this._selectedYear = currentDate.getFullYear();
        this._selectedMonth = currentDate.getMonth();
        this.initializeYears();
    }

    private initializeYears() {
        const currentYear = new Date().getFullYear();
        this._years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    }

    get netAsset(): number { return this._netAsset; }
    set netAsset(value: number) {
        if (this._netAsset !== value) {
            this._netAsset = value;
            this.notifyPropertyChange('netAsset', value);
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

    get snapshots() {
        return this._snapshotService.getSnapshots()
            .sort((a, b) => {
                if (a.year !== b.year) return b.year - a.year;
                return b.month - a.month;
            })
            .map(snapshot => ({
                ...snapshot,
                formattedDate: `${this._months[snapshot.month]} ${snapshot.year}`,
                formattedNetAsset: formatCurrency(snapshot.netAsset),
                formattedPercentageChange: snapshot.percentageChange 
                    ? formatPercentage(snapshot.percentageChange)
                    : 'N/A'
            }));
    }

    onSave() {
        try {
            if (this._netAsset <= 0) {
                throw new Error('Net asset value must be greater than 0');
            }

            // Check if snapshot already exists for selected month/year
            const existing = this._snapshotService.getSnapshots().find(
                s => s.year === this._selectedYear && s.month === this._selectedMonth
            );

            if (existing) {
                showDialog({
                    title: 'Snapshot Exists',
                    message: 'A snapshot already exists for this month. Do you want to update it?',
                    okButtonText: 'Update',
                    cancelButtonText: 'Cancel'
                }).then(result => {
                    if (result) {
                        existing.netAsset = this._netAsset;
                        this._snapshotService.updateSnapshot(existing);
                        this.resetForm();
                    }
                });
                return;
            }

            const snapshot = new MonthlySnapshot({
                year: this._selectedYear,
                month: this._selectedMonth,
                netAsset: this._netAsset
            });

            this._snapshotService.addSnapshot(snapshot);
            this.resetForm();
            Logger.debug(TAG, 'Successfully saved snapshot');
        } catch (error) {
            Logger.error(TAG, 'Error saving snapshot', error as Error);
        }
    }

    onItemTap(args: { index: number }) {
        const snapshot = this._snapshotService.getSnapshots()[args.index];
        showDialog({
            title: `${this._months[snapshot.month]} ${snapshot.year}`,
            message: `Net Asset: ${formatCurrency(snapshot.netAsset)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editSnapshot(snapshot);
            } else if (result === 'delete') {
                this.deleteSnapshot(snapshot);
            }
        });
    }

    private editSnapshot(snapshot: MonthlySnapshot) {
        this._selectedYear = snapshot.year;
        this._selectedMonth = snapshot.month;
        this._netAsset = snapshot.netAsset;
        this.notifyPropertyChange('selectedYear', this._selectedYear);
        this.notifyPropertyChange('selectedMonth', this._selectedMonth);
        this.notifyPropertyChange('netAsset', this._netAsset);
    }

    private deleteSnapshot(snapshot: MonthlySnapshot) {
        showDialog({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this snapshot?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result) {
                this._snapshotService.deleteSnapshot(snapshot.id);
                this.notifyPropertyChange('snapshots', this.snapshots);
            }
        });
    }

    private resetForm() {
        const currentDate = new Date();
        this._selectedYear = currentDate.getFullYear();
        this._selectedMonth = currentDate.getMonth();
        this._netAsset = 0;
        this.notifyPropertyChange('selectedYear', this._selectedYear);
        this.notifyPropertyChange('selectedMonth', this._selectedMonth);
        this.notifyPropertyChange('netAsset', this._netAsset);
        this.notifyPropertyChange('snapshots', this.snapshots);
    }
}