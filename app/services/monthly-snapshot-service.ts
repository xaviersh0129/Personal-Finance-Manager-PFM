import { BaseService } from './base-service';
import { MonthlySnapshot } from '../models/monthly-snapshot';
import { Logger } from '../utils/logger';

const TAG = 'MonthlySnapshotService';

export class MonthlySnapshotService extends BaseService<MonthlySnapshot> {
    private static instance: MonthlySnapshotService;
    protected readonly TAG = TAG;
    protected readonly storageKey = 'monthly_snapshots';

    private constructor() {
        super();
    }

    static getInstance(): MonthlySnapshotService {
        if (!MonthlySnapshotService.instance) {
            MonthlySnapshotService.instance = new MonthlySnapshotService();
        }
        return MonthlySnapshotService.instance;
    }

    protected transformLoadedItems(items: any[]): MonthlySnapshot[] {
        return items.map(data => new MonthlySnapshot(data));
    }

    addSnapshot(snapshot: MonthlySnapshot): void {
        this.addItem(snapshot);
        this.calculatePercentageChanges();
    }

    updateSnapshot(snapshot: MonthlySnapshot): void {
        this.updateItem(snapshot);
        this.calculatePercentageChanges();
    }

    deleteSnapshot(id: string): void {
        this.deleteItem(id);
        this.calculatePercentageChanges();
    }

    getSnapshots(): MonthlySnapshot[] {
        return this.getItems();
    }

    calculateSharpeRatio(): number | null {
        try {
            Logger.debug(TAG, 'Calculating Sharpe Ratio');
            
            // Get percentage changes and filter out undefined values
            const changes = this.items
                .filter(item => typeof item.percentageChange === 'number')
                .map(item => item.percentageChange!);

            Logger.debug(TAG, `Found ${changes.length} valid percentage changes`);

            // Need at least 2 data points for meaningful calculation
            if (changes.length < 2) {
                Logger.debug(TAG, 'Insufficient data points for Sharpe Ratio calculation');
                return null;
            }

            // Calculate average return
            const average = changes.reduce((a, b) => a + b, 0) / changes.length;
            Logger.debug(TAG, `Average return: ${average.toFixed(2)}%`);

            // Calculate standard deviation
            const variance = changes.reduce((a, b) => a + Math.pow(b - average, 2), 0) / (changes.length - 1);
            const stdDev = Math.sqrt(variance);
            Logger.debug(TAG, `Standard deviation: ${stdDev.toFixed(2)}`);

            // Avoid division by zero
            if (stdDev === 0) {
                Logger.debug(TAG, 'Standard deviation is zero, cannot calculate Sharpe Ratio');
                return null;
            }

            // Calculate annualized Sharpe Ratio
            const sharpeRatio = (average / stdDev) * Math.sqrt(12);
            Logger.debug(TAG, `Calculated Sharpe Ratio: ${sharpeRatio.toFixed(2)}`);
            
            return sharpeRatio;
        } catch (error) {
            Logger.error(TAG, 'Error calculating Sharpe Ratio', error as Error);
            return null;
        }
    }

    private calculatePercentageChanges(): void {
        try {
            // Sort snapshots by date
            const sortedSnapshots = [...this.items].sort((a, b) => {
                if (a.year !== b.year) return a.year - b.year;
                return a.month - b.month;
            });

            // Calculate percentage changes
            for (let i = 1; i < sortedSnapshots.length; i++) {
                const current = sortedSnapshots[i];
                const previous = sortedSnapshots[i - 1];
                
                const percentageChange = ((current.netAsset - previous.netAsset) / previous.netAsset) * 100;
                current.percentageChange = Number(percentageChange.toFixed(2));
            }

            // First snapshot has no percentage change
            if (sortedSnapshots.length > 0) {
                sortedSnapshots[0].percentageChange = undefined;
            }

            this.saveItems();
            Logger.debug(TAG, 'Successfully calculated percentage changes');
        } catch (error) {
            Logger.error(TAG, 'Error calculating percentage changes', error as Error);
        }
    }
}