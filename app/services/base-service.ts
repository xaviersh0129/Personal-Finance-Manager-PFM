import { Observable } from '@nativescript/core';
import { StorageService } from './storage-service';
import { Logger } from '../utils/logger';

export abstract class BaseService<T extends { id: string }> extends Observable {
    protected items: T[] = [];
    protected storageService: StorageService;
    protected abstract readonly TAG: string;
    protected abstract readonly storageKey: string;

    constructor() {
        super();
        this.storageService = StorageService.getInstance();
        this.loadItems();
    }

    protected loadItems(): void {
        try {
            if (!this.storageKey) {
                throw new Error('Storage key not set');
            }
            const savedItems = this.storageService.getItem<any[]>(this.storageKey, []);
            this.items = this.transformLoadedItems(savedItems);
            Logger.debug(this.TAG, `Loaded ${this.items.length} items from ${this.storageKey}`);
        } catch (error) {
            Logger.error(this.TAG, `Error loading items from ${this.storageKey}`, error as Error);
            this.items = [];
        }
    }

    protected saveItems(): void {
        try {
            if (!this.storageKey) {
                throw new Error('Storage key not set');
            }
            this.storageService.setItem(this.storageKey, this.items);
            Logger.debug(this.TAG, `Saved ${this.items.length} items to ${this.storageKey}`);
        } catch (error) {
            Logger.error(this.TAG, `Error saving items to ${this.storageKey}`, error as Error);
        }
    }

    protected abstract transformLoadedItems(items: any[]): T[];

    protected addItem(item: T): void {
        if (!item.id) {
            Logger.error(this.TAG, 'Cannot add item without id');
            return;
        }
        this.items.push(item);
        this.saveItems();
        this.notifyPropertyChange('items', this.items);
        Logger.debug(this.TAG, `Added item with id: ${item.id}`);
    }

    protected updateItem(item: T): void {
        if (!item.id) {
            Logger.error(this.TAG, 'Cannot update item without id');
            return;
        }
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
            this.saveItems();
            this.notifyPropertyChange('items', this.items);
            Logger.debug(this.TAG, `Updated item with id: ${item.id}`);
        }
    }

    protected deleteItem(id: string): void {
        if (!id) {
            Logger.error(this.TAG, 'Cannot delete item without id');
            return;
        }
        this.items = this.items.filter(item => item.id !== id);
        this.saveItems();
        this.notifyPropertyChange('items', this.items);
        Logger.debug(this.TAG, `Deleted item with id: ${id}`);
    }

    protected getItems(): T[] {
        return [...this.items];
    }
}