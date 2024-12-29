import { Observable } from '@nativescript/core';

export type AssetCategory = 
    | 'Real Estate' 
    | 'Business' 
    | 'Stocks' 
    | 'Art & Antiquities' 
    | 'Saving/Cash';

export class Asset extends Observable {
    id: string;
    category: AssetCategory;
    value: number;
    name: string;

    constructor(data: Partial<Asset>) {
        super();
        this.id = data.id || crypto.randomUUID();
        this.category = data.category || 'Saving/Cash';
        this.value = data.value || 0;
        this.name = data.name || '';
    }
}