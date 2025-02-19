import { DatabaseService } from '../database/db-service';
import { Logger } from '../utils/logger';

const TAG = 'StorageService';

export class StorageService {
    private static instance: StorageService;
    private db: DatabaseService;

    private constructor() {
        this.db = DatabaseService.getInstance();
    }

    static getInstance(): StorageService {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    async setItem<T>(key: string, value: T): Promise<void> {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            
            const jsonValue = JSON.stringify(value);
            await this.db.execute(
                'INSERT OR REPLACE INTO app_storage (key, value) VALUES (?, ?)',
                [key, jsonValue]
            );
            
            Logger.debug(TAG, `Successfully stored data for key: ${key}`);
        } catch (error) {
            Logger.error(TAG, `Error storing data for key: ${key}`, error as Error);
            throw error;
        }
    }

    async getItem<T>(key: string, defaultValue: T): Promise<T> {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }

            const results = await this.db.select<{value: string}>(
                'SELECT value FROM app_storage WHERE key = ?',
                [key]
            );

            if (results.length > 0) {
                return JSON.parse(results[0].value);
            }
            return defaultValue;
        } catch (error) {
            Logger.error(TAG, `Error retrieving data for key: ${key}`, error as Error);
            return defaultValue;
        }
    }

    async removeItem(key: string): Promise<void> {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            
            await this.db.execute(
                'DELETE FROM app_storage WHERE key = ?',
                [key]
            );
            
            Logger.debug(TAG, `Successfully removed data for key: ${key}`);
        } catch (error) {
            Logger.error(TAG, `Error removing data for key: ${key}`, error as Error);
            throw error;
        }
    }

    async clear(): Promise<void> {
        try {
            await this.db.execute('DELETE FROM app_storage');
            Logger.debug(TAG, 'Successfully cleared all storage');
        } catch (error) {
            Logger.error(TAG, 'Error clearing storage', error as Error);
            throw error;
        }
    }
}