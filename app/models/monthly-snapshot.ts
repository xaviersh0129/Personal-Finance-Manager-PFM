import { Observable } from '@nativescript/core';

export class MonthlySnapshot extends Observable {
    id: string;
    year: number;
    month: number;
    netAsset: number;
    percentageChange?: number;

    constructor(data: Partial<MonthlySnapshot>) {
        super();
        this.id = data.id || crypto.randomUUID();
        const date = new Date();
        this.year = data.year || date.getFullYear();
        this.month = data.month || date.getMonth();
        this.netAsset = data.netAsset || 0;
        this.percentageChange = data.percentageChange;
    }
}