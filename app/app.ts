import { Application } from '@nativescript/core';
import { DatabaseService } from './database/db-service';
import { Logger } from './utils/logger';

const TAG = 'App';

Application.on(Application.launchEvent, async () => {
    try {
        Logger.debug(TAG, 'Starting application initialization');
        
        // Initialize database first
        const dbService = DatabaseService.getInstance();
        await dbService.initialize();
        
        Logger.debug(TAG, 'Database initialized successfully');
    } catch (error) {
        Logger.error(TAG, 'Fatal error during app initialization', error as Error);
    }
});

// Handle app suspension
Application.on(Application.suspendEvent, () => {
    try {
        Logger.debug(TAG, 'Application suspending, closing database...');
        const dbService = DatabaseService.getInstance();
        dbService.close();
    } catch (error) {
        Logger.error(TAG, 'Error during app suspension', error as Error);
    }
});

Application.run({ moduleName: 'app-root' });