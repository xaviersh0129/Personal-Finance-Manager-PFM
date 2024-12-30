import { Transaction } from '../models/transaction';
import { BaseService } from './base-service';
import { StorageKeys } from '../constants/storage-keys';
import { Logger } from '../utils/logger';

export class TransactionService extends BaseService<Transaction> {
    private static instance: TransactionService;
    protected readonly TAG = 'TransactionService';
    protected readonly storageKey = StorageKeys.TRANSACTIONS;

    private constructor() {
        super();
    }

    static getInstance(): TransactionService {
        if (!TransactionService.instance) {
            TransactionService.instance = new TransactionService();
        }
        return TransactionService.instance;
    }

    protected transformLoadedItems(items: any[]): Transaction[] {
        return items.map(data => new Transaction({
            ...data,
            amount: Number(data.amount),
            timeRequired: data.timeRequired ? Number(data.timeRequired) : undefined
        }));
    }

    getMonthlyTransactions(month: number, year: number): Transaction[] {
        return this.items.filter(t => t.month === month && t.year === year);
    }

    addTransaction(transaction: Transaction): void {
        transaction.amount = Number(transaction.amount);
        if (isNaN(transaction.amount)) {
            Logger.error(this.TAG, 'Invalid transaction amount');
            return;
        }
        this.addItem(transaction);
    }

    updateTransaction(transaction: Transaction): void {
        transaction.amount = Number(transaction.amount);
        if (isNaN(transaction.amount)) {
            Logger.error(this.TAG, 'Invalid transaction amount');
            return;
        }
        this.updateItem(transaction);
    }

    deleteTransaction(id: string): void {
        this.deleteItem(id);
    }

    getTransactions(): Transaction[] {
        return this.getItems();
    }

    getTotalIncome(): number {
        return this.items
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + Number(t.amount), 0);
    }

    getTotalExpenses(): number {
        return this.items
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + Number(t.amount), 0);
    }

    getTotalTimeRequired(): number {
        return this.items
            .filter(t => t.type === 'income' && t.timeRequired)
            .reduce((sum, t) => sum + Number(t.timeRequired || 0), 0);
    }
}