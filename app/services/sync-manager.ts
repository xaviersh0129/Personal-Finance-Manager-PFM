import { Logger } from '../utils/logger';
import { CloudSyncService } from './cloud-sync-service';
import { AssetService } from './asset-service';
import { LiabilityService } from './liability-service';
import { TransactionService } from './transaction-service';
import { MonthlySnapshotService } from './monthly-snapshot-service';

const TAG = 'SyncManager';

export class SyncManager {
    private static instance: SyncManager;
    private cloudSync: CloudSyncService;
    private services: {
        assets: AssetService;
        liabilities: LiabilityService;
        transactions: TransactionService;
        snapshots: MonthlySnapshotService;
    };

    private constructor() {
        this.cloudSync = CloudSyncService.getInstance();
        this.services = {
            assets: AssetService.getInstance(),
            liabilities: LiabilityService.getInstance(),
            transactions: TransactionService.getInstance(),
            snapshots: MonthlySnapshotService.getInstance()
        };
    }

    static getInstance(): SyncManager {
        if (!SyncManager.instance) {
            SyncManager.instance = new SyncManager();
        }
        return SyncManager.instance;
    }

    async syncAll(): Promise<void> {
        try {
            Logger.debug(TAG, 'Starting full sync');
            
            await Promise.all([
                this.cloudSync.syncData('assets', this.services.assets.getAssets()),
                this.cloudSync.syncData('liabilities', this.services.liabilities.getLiabilities()),
                this.cloudSync.syncData('transactions', this.services.transactions.getTransactions()),
                this.cloudSync.syncData('monthly_snapshots', this.services.snapshots.getSnapshots())
            ]);

            Logger.debug(TAG, 'Full sync completed successfully');
        } catch (error) {
            Logger.error(TAG, 'Error during full sync', error as Error);
        }
    }
}