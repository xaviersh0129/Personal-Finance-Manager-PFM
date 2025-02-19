export interface Logger {
    debug(tag: string, message: string, ...args: any[]): void;
    error(tag: string, message: string, error?: Error): void;
}