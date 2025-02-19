import { isAndroid } from '@nativescript/core';
import { AndroidLogger } from './platform/android-logger';
import { ConsoleLogger } from './platform/console-logger';
import { Logger as LoggerInterface } from './logger-interface';

class LoggerService {
    private androidLogger: LoggerInterface;
    private consoleLogger: LoggerInterface;

    constructor() {
        this.androidLogger = new AndroidLogger();
        this.consoleLogger = new ConsoleLogger();
    }

    debug(tag: string, message: string, ...args: any[]): void {
        this.consoleLogger.debug(tag, message, ...args);
        if (isAndroid) {
            this.androidLogger.debug(tag, message);
        }
    }

    error(tag: string, message: string, error?: Error): void {
        this.consoleLogger.error(tag, message, error);
        if (isAndroid) {
            this.androidLogger.error(tag, message);
        }
    }
}

export const Logger = new LoggerService();