import { Application } from '@nativescript/core';
import { Logger } from './utils/logger';

const TAG = 'App';

try {
    Logger.debug(TAG, 'Starting application initialization');
    Application.run({ moduleName: 'app-root' });
} catch (error) {
    Logger.error(TAG, 'Failed to initialize application', error as Error);
    throw error;
}