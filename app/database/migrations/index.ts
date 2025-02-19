import { File, knownFolders } from '@nativescript/core';
import { Logger } from '../../utils/logger';

const TAG = 'Migrations';

export async function getMigrationQueries(): Promise<string[]> {
    try {
        // Initial schema for SQLite
        const queries = [
            `CREATE TABLE IF NOT EXISTS app_storage (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL,
                created_at INTEGER DEFAULT (strftime('%s', 'now')),
                updated_at INTEGER DEFAULT (strftime('%s', 'now'))
            );`,
            `CREATE INDEX IF NOT EXISTS idx_app_storage_key ON app_storage(key);`
        ];
        
        Logger.debug(TAG, 'Successfully loaded migration queries');
        return queries;
    } catch (error) {
        Logger.error(TAG, 'Failed to load migrations', error as Error);
        throw error;
    }
}