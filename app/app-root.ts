import { EventData, Frame } from '@nativescript/core';
import { Logger } from './utils/logger';

const TAG = 'AppRoot';

export function onLoaded(args: EventData) {
    try {
        Logger.debug(TAG, 'App root loaded');
        const frame = args.object as Frame;
        frame.navigate({
            moduleName: 'views/main-page',
            clearHistory: true
        });
    } catch (error) {
        Logger.error(TAG, 'Error in onLoaded', error as Error);
    }
}