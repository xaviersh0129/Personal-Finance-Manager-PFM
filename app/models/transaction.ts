import { Observable } from '@nativescript/core';

export type TransactionType = 'income' | 'expense';
export type TransactionCategory = 
  // Income categories
  | 'Salary' | 'Business' | 'Rent' | 'Interest' | 'Royalties'
  // Expense categories
  | 'Consumer basket' | 'Habits' | 'Car' | 'Routine' | 'Housing' | 'Credit Card/Loan';

export class Transaction extends Observable {
    id: string;
    type: TransactionType;
    category: TransactionCategory;
    amount: number;
    description: string;
    timeRequired?: number; // Hours required (only for income)
    month: number;
    year: number;

    constructor(data: Partial<Transaction>) {
        super();
        const date = new Date();
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'expense';
        this.category = data.category || 'Consumer basket';
        this.amount = Number(data.amount || 0);
        this.description = data.description || '';
        this.timeRequired = data.type === 'income' ? Number(data.timeRequired || 1) : undefined;
        this.month = data.month ?? date.getMonth();
        this.year = data.year ?? date.getFullYear();
    }
}