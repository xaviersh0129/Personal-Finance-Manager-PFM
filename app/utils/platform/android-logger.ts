import { Logger } from '../logger-interface';

declare const android: any;

export class AndroidLogger implements Logger {
    debug(tag: string, message: string): void {
        if (global.android && android.util) {
            android.util.Log.d(tag, message);
        }
    }

    error(tag: string, message: string): void {
        if (global.android && android.util) {
            android.util.Log.e(tag, message);
        }
    }
}