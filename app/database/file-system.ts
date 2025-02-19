import { knownFolders, Folder } from '@nativescript/core';
import { Logger } from '../utils/logger';

const TAG = 'FileSystem';

export class FileSystem {
    static ensureDirectoryExists(path: string): void {
        try {
            if (!Folder.exists(path)) {
                // Create folder using the static create method
                Folder.fromPath(path);
                Logger.debug(TAG, `Created directory: ${path}`);
            } else {
                Logger.debug(TAG, `Directory already exists: ${path}`);
            }
        } catch (error) {
            Logger.error(TAG, `Failed to ensure directory exists: ${path}`, error as Error);
            throw error;
        }
    }

    static getDocumentsPath(): string {
        return knownFolders.documents().path;
    }
}