import { BaseViewModel } from '../base-view-model';
import { MonthlySnapshot } from '../../models/monthly-snapshot';
import { MonthlySnapshotService } from '../../services/monthly-snapshot-service';
import { EventBusService, EventNames } from '../../services/event-bus-service';
import { formatCurrency, formatPercentage } from '../../utils/formatters';
import { navigateToPage } from '../../utils/navigation';
import { showDialog } from '../../utils/dialog';
import { Logger } from '../../utils/logger';

const TAG = 'MonthlySnapshotViewModel';

export class MonthlySnapshotViewModel extends BaseViewModel {
    private _snapshotService: MonthlySnapshotService;
    private _eventBus: EventBusService;
    private _snapshots: MonthlySnapshot[] = [];
    private _months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    constructor() {
        super();
        this._snapshotService = MonthlySnapshotService.getInstance();
        this._eventBus = EventBusService.getInstance();
        
        // Listen for snapshot updates
        this._eventBus.on(EventNames.SNAPSHOT_UPDATED, () => {
            this.loadSnapshots();
        });
        
        this.loadSnapshots();
    }

    get snapshots() {
        return this._snapshots
            .sort((a, b) => {
                if (a.year !== b.year) return b.year - a.year;
                return b.month - a.month;
            })
            .map(snapshot => ({
                ...snapshot,
                formattedDate: `${this._months[snapshot.month]} ${snapshot.year}`,
                formattedNetAsset: formatCurrency(snapshot.netAsset),
                formattedPercentageChange: snapshot.percentageChange !== undefined
                    ? formatPercentage(snapshot.percentageChange)
                    : 'N/A'
            }));
    }

    refresh(): void {
        Logger.debug(TAG, 'Refreshing snapshots');
        this.loadSnapshots();
    }

    onAddSnapshot(): void {
        Logger.debug(TAG, 'Navigating to Add Snapshot page');
        navigateToPage('views/monthly-snapshot/add-snapshot-page');
    }

    onItemTap(args: { index: number }): void {
        const snapshot = this._snapshots[args.index];
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

    onUnloaded(): void {
        Logger.debug(TAG, 'Cleaning up event listeners');
        this._eventBus.off(EventNames.SNAPSHOT_UPDATED);
    }

    private loadSnapshots(): void {
        try {
            this._snapshots = this._snapshotService.getSnapshots();
            this.notifyPropertyChange('snapshots', this.snapshots);
            Logger.debug(TAG, `Loaded ${this._snapshots.length} snapshots`);
        } catch (error) {
            Logger.error(TAG, 'Error loading snapshots', error as Error);
        }
    }

    private editSnapshot(snapshot: MonthlySnapshot): void {
        Logger.debug(TAG, `Editing snapshot: ${snapshot.id}`);
        navigateToPage('views/monthly-snapshot/add-snapshot-page', { snapshot });
    }

    private deleteSnapshot(snapshot: MonthlySnapshot): void {
        Logger.debug(TAG, `Deleting snapshot: ${snapshot.id}`);
        showDialog({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this snapshot?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result) {
                this._snapshotService.deleteSnapshot(snapshot.id);
                this.loadSnapshots();
                Logger.debug(TAG, `Snapshot deleted: ${snapshot.id}`);
            }
        });
    }
}