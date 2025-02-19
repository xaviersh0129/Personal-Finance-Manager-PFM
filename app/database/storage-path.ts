import { knownFolders, path, Folder } from '@nativescript/core';

export function getStoragePath(): string {
    // Use app-specific permanent storage directory
    const permanentPath = path.join(knownFolders.documents().path, 'permanent_storage');
    
    // Ensure directory exists
    if (!Folder.exists(permanentPath)) {
        Folder.fromPath(permanentPath);
    }
    
    return permanentPath;
}