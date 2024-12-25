import { isAndroid } from '@nativescript/core';

export class Logger {
    static debug(tag: string, message: string, ...args: any[]): void {
        const logMessage = `[${tag}] ${message}`;
        if (args.length > 0) {
            console.log(logMessage, ...args);
        } else {
            console.log(logMessage);
        }

        if (isAndroid && global.android) {
            // @ts-ignore: Android specific code
            android.util.Log.d(tag, message);
        }
    }

    static error(tag: string, message: string, error?: Error): void {
        const logMessage = `[${tag}] ERROR: ${message}`;
        console.error(logMessage);
        if (error) {
            console.error(error);
        }

        if (isAndroid && global.android) {
            // @ts-ignore: Android specific code
            android.util.Log.e(tag, message);
        }
    }
}