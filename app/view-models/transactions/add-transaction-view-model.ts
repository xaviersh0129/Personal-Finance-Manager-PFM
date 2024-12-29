import { BaseViewModel } from '../base-view-model';
import { Transaction, TransactionType, TransactionCategory } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { Logger } from '../../utils/logger';

const TAG = 'AddTransactionViewModel';

export class AddTransactionViewModel extends BaseViewModel {
    private _description: string = '';
    private _amount: number = 0;
    private _selectedCategoryIndex: number = 0;
    private _timeRequired: number = 1;
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
        this._selectedCategoryIndex = this._categories.indexOf(transaction.category);
        if (transaction.type === 'income') {
            this._timeRequired = transaction.timeRequired || 1;
        }
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

    get timeRequired(): number { return this._timeRequired; }
    set timeRequired(value: number | string) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && numericValue > 0 && this._timeRequired !== numericValue) {
            this._timeRequired = numericValue;
            this.notifyPropertyChange('timeRequired', numericValue);
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
            ? ['Salary', 'Business', 'Rent', 'Interest', 'Royalties']
            : ['Consumer basket', 'Habits', 'Car', 'Routine', 'Housing', 'Credit Card/Loan'];
    }

    onSave() {
        try {
            const transaction = new Transaction({
                ...(this._existingTransaction && { id: this._existingTransaction.id }),
                type: this._isIncome ? 'income' : 'expense',
                category: this._categories[this._selectedCategoryIndex],
                amount: this._amount,
                description: this._description,
                timeRequired: this._isIncome ? this._timeRequired : undefined
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