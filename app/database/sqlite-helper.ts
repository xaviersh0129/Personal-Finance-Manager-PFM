import { knownFolders } from '@nativescript/core';
import * as Sqlite from 'nativescript-sqlite';
import { Logger } from '../utils/logger';

const TAG = 'SQLiteHelper';

export class SQLiteHelper {
    private database: any = null;
    private readonly dbPath: string;
    private connectionPromise: Promise<void> | null = null;

    constructor(dbName: string) {
        this.dbPath = `${knownFolders.documents().path}/${dbName}`;
    }

    async open(): Promise<void> {
        // If already connecting, return existing promise
        if (this.connectionPromise) {
            return this.connectionPromise;
        }

        // Create new connection promise
        this.connectionPromise = this.openDatabase();
        return this.connectionPromise;
    }

    private async openDatabase(): Promise<void> {
        try {
            if (!this.database) {
                this.database = await new Sqlite(this.dbPath);
                Logger.debug(TAG, 'Database connection opened successfully');
            }
        } catch (error) {
            this.connectionPromise = null;
            Logger.error(TAG, 'Failed to open database connection', error as Error);
            throw error;
        }
    }

    async execute(query: string, params: any[] = []): Promise<void> {
        await this.ensureConnection();
        try {
            await this.database.execSQL(query, params);
        } catch (error) {
            Logger.error(TAG, `Failed to execute query: ${query}`, error as Error);
            throw error;
        }
    }

    async select<T = any>(query: string, params: any[] = []): Promise<T[]> {
        await this.ensureConnection();
        try {
            return await this.database.all(query, params);
        } catch (error) {
            Logger.error(TAG, `Failed to execute select query: ${query}`, error as Error);
            throw error;
        }
    }

    private async ensureConnection(): Promise<void> {
        if (!this.database) {
            await this.open();
        }
    }

    async close(): Promise<void> {
        if (this.database) {
            try {
                await this.database.close();
                this.database = null;
                this.connectionPromise = null;
                Logger.debug(TAG, 'Database connection closed successfully');
            } catch (error) {
                Logger.error(TAG, 'Failed to close database connection', error as Error);
                throw error;
            }
        }
    }
}