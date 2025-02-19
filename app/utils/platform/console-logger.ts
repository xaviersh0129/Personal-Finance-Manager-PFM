import { Logger } from '../logger-interface';

export class ConsoleLogger implements Logger {
    debug(tag: string, message: string, ...args: any[]): void {
        const logMessage = `[${tag}] ${message}`;
        console.log(logMessage, ...args);
    }

    error(tag: string, message: string, error?: Error): void {
        const logMessage = `[${tag}] ERROR: ${message}`;
        console.error(logMessage);
        if (error) {
            console.error(error);
        }
    }
}