import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Logger } from '../utils/logger';
import { NetworkService } from './network-service';

const TAG = 'CloudSyncService';

export class CloudSyncService {
    private static instance: CloudSyncService;
    private supabase: SupabaseClient;
    private networkService: NetworkService;

    private constructor() {
        this.networkService = NetworkService.getInstance();
        this.supabase = createClient(
            process.env.VITE_SUPABASE_URL!,
            process.env.VITE_SUPABASE_ANON_KEY!
        );
    }

    static getInstance(): CloudSyncService {
        if (!CloudSyncService.instance) {
            CloudSyncService.instance = new CloudSyncService();
        }
        return CloudSyncService.instance;
    }

    async syncData<T>(tableName: string, localData: T[]): Promise<void> {
        try {
            if (!await this.networkService.isConnected()) {
                Logger.debug(TAG, 'No network connection, skipping sync');
                return;
            }

            const { data, error } = await this.supabase
                .from(tableName)
                .upsert(localData, { onConflict: 'id' });

            if (error) throw error;
            Logger.debug(TAG, `Successfully synced ${tableName}`);
        } catch (error) {
            Logger.error(TAG, `Error syncing ${tableName}`, error as Error);
            throw error;
        }
    }
}