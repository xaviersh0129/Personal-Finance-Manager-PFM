import * as Sqlite from 'nativescript-sqlite';
import { Logger } from '../utils/logger';
import { getMigrationQueries } from './migrations';
import { getStoragePath } from './storage-path';
import { path } from '@nativescript/core';

const TAG = 'DatabaseService';

export class DatabaseService {
    private static instance: DatabaseService;
    private database: any = null;
    private readonly dbPath: string;
    private initializationPromise: Promise<void> | null = null;

    private constructor() {
        // Store database in permanent storage location
        this.dbPath = path.join(getStoragePath(), 'cetepfm.db');
    }

    static getInstance(): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }

    async initialize(): Promise<void> {
        if (this.initializationPromise) {
            return this.initializationPromise;
        }

        this.initializationPromise = this.initializeDatabase();
        return this.initializationPromise;
    }

    private async initializeDatabase(): Promise<void> {
        try {
            Logger.debug(TAG, 'Opening SQLite connection...');
            Logger.debug(TAG, `Database path: ${this.dbPath}`);
            
            this.database = await new Sqlite(this.dbPath);
            
            // Configure database for durability
            await this.database.execSQL('PRAGMA synchronous = FULL');
            await this.database.execSQL('PRAGMA journal_mode = DELETE');
            await this.database.execSQL('PRAGMA foreign_keys = ON');
            await this.database.execSQL('PRAGMA temp_store = MEMORY');
            await this.database.execSQL('PRAGMA page_size = 4096');
            await this.database.execSQL('PRAGMA cache_size = 2000');
            await this.database.execSQL('PRAGMA locking_mode = NORMAL');
            
            // Run migrations
            const migrations = await getMigrationQueries();
            for (const query of migrations) {
                await this.database.execSQL(query);
            }
            
            Logger.debug(TAG, 'Database initialization completed successfully');
        } catch (error) {
            this.initializationPromise = null;
            Logger.error(TAG, 'Database initialization failed', error as Error);
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
            await this.initialize();
        }
    }

    async close(): Promise<void> {
        if (this.database) {
            try {
                await this.database.execSQL('PRAGMA synchronous = FULL');
                await this.database.close();
                this.database = null;
                this.initializationPromise = null;
                Logger.debug(TAG, 'Database connection closed successfully');
            } catch (error) {
                Logger.error(TAG, 'Failed to close database connection', error as Error);
                throw error;
            }
        }
    }
}