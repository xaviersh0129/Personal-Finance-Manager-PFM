import { BaseViewModel } from '../base-view-model';
import { Transaction, TransactionType, TransactionCategory } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { Logger } from '../../utils/logger';

const TAG = 'AddTransactionViewModel';

export class AddTransactionViewModel extends BaseViewModel {
    private _description: string = '';
    private _amount: number = 0;
    private _date: Date = new Date();
    private _selectedCategoryIndex: number = 0;
    private _categories: TransactionCategory[] = [];
    private _isIncome: boolean;
    private _transactionService: TransactionService;
    private _existingTransaction?: Transaction;

    constructor(isIncome: boolean, existingTransaction?: Transaction) {
        super();
        this._isIncome = isIncome;
        this._existingTransaction = existingTransaction;
        this._transactionService = TransactionService.getInstance();
        this._categories = this.getCategories();

        if (existingTransaction) {
            this.initializeWithExistingTransaction(existingTransaction);
        }
    }

    private initializeWithExistingTransaction(transaction: Transaction) {
        this._description = transaction.description;
        this._amount = Number(transaction.amount);
        this._date = new Date(transaction.date);
        this._selectedCategoryIndex = this._categories.indexOf(transaction.category);
    }

    get description(): string { return this._description; }
    set description(value: string) {
        if (this._description !== value) {
            this._description = value;
            this.notifyPropertyChange('description', value);
        }
    }

    get amount(): number { return this._amount; }
    set amount(value: number | string) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._amount !== numericValue) {
            this._amount = numericValue;
            this.notifyPropertyChange('amount', numericValue);
        }
    }

    get date(): Date { return this._date; }
    set date(value: Date) {
        if (this._date !== value) {
            this._date = value;
            this.notifyPropertyChange('date', value);
        }
    }

    get categories(): TransactionCategory[] { return this._categories; }
    get selectedCategoryIndex(): number { return this._selectedCategoryIndex; }
    set selectedCategoryIndex(value: number) {
        if (this._selectedCategoryIndex !== value) {
            this._selectedCategoryIndex = value;
            this.notifyPropertyChange('selectedCategoryIndex', value);
        }
    }

    get isIncome(): boolean { return this._isIncome; }

    private getCategories(): TransactionCategory[] {
        return this._isIncome 
            ? ['Salary', 'Real Estate', 'Business', 'Interest/Dividends']
            : ['Housing', 'Transportation', 'Food', 'Utilities', 'Insurance', 'Healthcare', 'Entertainment', 'Loan'];
    }

    onSave() {
        try {
            const transaction = new Transaction({
                ...(this._existingTransaction && { id: this._existingTransaction.id }),
                type: this._isIncome ? 'income' : 'expense',
                category: this._categories[this._selectedCategoryIndex],
                amount: this._amount,
                date: this._date,
                description: this._description
            });

            if (this._existingTransaction) {
                this._transactionService.updateTransaction(transaction);
                Logger.debug(TAG, `Successfully updated ${this._isIncome ? 'income' : 'expense'} transaction`);
            } else {
                this._transactionService.addTransaction(transaction);
                Logger.debug(TAG, `Successfully added ${this._isIncome ? 'income' : 'expense'} transaction`);
            }
            
            this.goBack();
        } catch (error) {
            Logger.error(TAG, 'Error saving transaction', error as Error);
        }
    }
}