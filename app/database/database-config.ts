import { getStoragePath } from './storage-path';
import { path } from '@nativescript/core';

export const DATABASE_CONFIG = {
    name: 'cetepfm.db',
    path: path.join(getStoragePath(), 'cetepfm.db'),
    version: 1,
    createFlags: 0x00000004 | 0x00000002 | 0x00010000,
    journalMode: 'DELETE',
    pragmas: [
        'PRAGMA synchronous = FULL;',
        'PRAGMA journal_mode = DELETE;',
        'PRAGMA foreign_keys = ON;',
        'PRAGMA temp_store = MEMORY;',
        'PRAGMA page_size = 4096;',
        'PRAGMA cache_size = 2000;',
        'PRAGMA locking_mode = NORMAL;'
    ]
};