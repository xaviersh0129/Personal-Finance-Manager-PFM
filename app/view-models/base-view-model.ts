import { Observable, Frame } from '@nativescript/core';
import { Logger } from '../utils/logger';

const TAG = 'BaseViewModel';

export class BaseViewModel extends Observable {
    goBack(): void {
        Logger.debug(TAG, 'Attempting to navigate back');
        try {
            const frame = Frame.topmost();
            if (frame) {
                frame.goBack();
                Logger.debug(TAG, 'Successfully navigated back');
            } else {
                Logger.error(TAG, 'Frame is null, cannot navigate back');
            }
        } catch (error) {
            Logger.error(TAG, 'Error navigating back', error as Error);
        }
    }
}