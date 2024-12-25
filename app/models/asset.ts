import { Observable } from '@nativescript/core';

export type AssetCategory = 'Real Estate' | 'Vehicles' | 'Cash' | 'Business' | 'Saving' | 'Stocks';

export class Asset extends Observable {
  id: string;
  category: AssetCategory;
  value: number;
  name: string;
  purchaseDate: Date;

  constructor(data: Partial<Asset>) {
    super();
    this.id = data.id || crypto.randomUUID();
    this.category = data.category || 'Cash';
    this.value = data.value || 0;
    this.name = data.name || '';
    this.purchaseDate = data.purchaseDate || new Date();
  }
}