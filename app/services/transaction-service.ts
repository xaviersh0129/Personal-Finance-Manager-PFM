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
            date: new Date(data.date)
        }));
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

    getMonthlyTransactions(month: number, year: number): Transaction[] {
        return this.items.filter(t => {
            const transactionDate = t.date;
            return transactionDate.getMonth() === month && 
                   transactionDate.getFullYear() === year;
        });
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
}