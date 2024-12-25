import { Observable } from '@nativescript/core';

export type TransactionType = 'income' | 'expense';
export type TransactionCategory = 
  | 'Salary' | 'Real Estate' | 'Business' | 'Interest/Dividends'  // Income categories
  | 'Housing' | 'Transportation' | 'Food' | 'Utilities' | 'Insurance' | 'Healthcare' | 'Entertainment' | 'Loan';  // Expense categories

export class Transaction extends Observable {
    id: string;
    type: TransactionType;
    category: TransactionCategory;
    amount: number;
    date: Date;
    description: string;

    constructor(data: Partial<Transaction>) {
        super();
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'expense';
        this.category = data.category || 'Food';
        this.amount = Number(data.amount || 0);
        this.date = data.date || new Date();
        this.description = data.description || '';
    }
}