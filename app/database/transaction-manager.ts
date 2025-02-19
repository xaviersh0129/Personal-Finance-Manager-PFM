import { Logger } from '../utils/logger';

const TAG = 'DbTransaction';

export class DbTransaction {
    constructor(private database: any) {}

    async execute(query: string): Promise<void> {
        await this.database.execSQL('BEGIN TRANSACTION');
        try {
            await this.database.execSQL(query);
            await this.database.execSQL('COMMIT');
            Logger.debug(TAG, 'Transaction completed successfully');
        } catch (error) {
            await this.database.execSQL('ROLLBACK');
            Logger.error(TAG, 'Transaction failed, rolling back', error as Error);
            throw error;
        }
    }
}