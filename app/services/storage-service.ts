import { ApplicationSettings } from '@nativescript/core';
import { Logger } from '../utils/logger';

const TAG = 'StorageService';

export class StorageService {
    private static instance: StorageService;

    static getInstance(): StorageService {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    setItem<T>(key: string, value: T): void {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            ApplicationSettings.setString(key, JSON.stringify(value));
            Logger.debug(TAG, `Successfully stored data for key: ${key}`);
        } catch (error) {
            Logger.error(TAG, `Error storing data for key: ${key}`, error as Error);
            throw error;
        }
    }

    getItem<T>(key: string, defaultValue: T): T {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            const value = ApplicationSettings.getString(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (error) {
            Logger.error(TAG, `Error retrieving data for key: ${key}`, error as Error);
            return defaultValue;
        }
    }

    removeItem(key: string): void {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            ApplicationSettings.remove(key);
            Logger.debug(TAG, `Successfully removed data for key: ${key}`);
        } catch (error) {
            Logger.error(TAG, `Error removing data for key: ${key}`, error as Error);
            throw error;
        }
    }

    clear(): void {
        try {
            ApplicationSettings.clear();
            Logger.debug(TAG, 'Successfully cleared all storage');
        } catch (error) {
            Logger.error(TAG, 'Error clearing storage', error as Error);
            throw error;
        }
    }
}