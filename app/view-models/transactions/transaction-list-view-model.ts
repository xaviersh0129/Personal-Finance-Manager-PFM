import { BaseViewModel } from '../base-view-model';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { navigateToPage } from '../../utils/navigation';
import { showDialog, ConfirmDialogOptions } from '../../utils/dialog';
import { Logger } from '../../utils/logger';

const TAG = 'TransactionListViewModel';

export class TransactionListViewModel extends BaseViewModel {
    private _transactions: Transaction[] = [];
    private _filterType: 'income' | 'expense' | undefined;
    private _transactionService: TransactionService;

    constructor(filterType?: 'income' | 'expense') {
        super();
        this._filterType = filterType;
        this._transactionService = TransactionService.getInstance();
        this.loadTransactions();
    }

    get filterType(): 'income' | 'expense' | undefined {
        return this._filterType;
    }

    get totalAmountFormatted(): string {
        const total = this._filterType === 'income' 
            ? this._transactionService.getTotalIncome()
            : this._transactionService.getTotalExpenses();
        return `Total ${this._filterType === 'income' ? 'Income' : 'Expenses'}: ${formatCurrency(total)}`;
    }

    get transactions() {
        let filteredTransactions = [...this._transactions];
        
        if (this._filterType) {
            filteredTransactions = filteredTransactions.filter(t => t.type === this._filterType);
        }

        return filteredTransactions.map(transaction => ({
            ...transaction,
            formattedAmount: formatCurrency(transaction.amount),
            formattedDate: formatDate(transaction.date)
        }));
    }

    onAddTransaction() {
        navigateToPage('views/transactions/add-transaction-page', { 
            isIncome: this._filterType === 'income' 
        });
    }

    onItemTap(args: { index: number }) {
        const transaction = this._transactions[args.index];
        showDialog({
            title: transaction.description,
            message: `Amount: ${formatCurrency(transaction.amount)}\nDate: ${formatDate(transaction.date)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editTransaction(transaction);
            } else if (result === 'delete') {
                this.deleteTransaction(transaction);
            }
        });
    }

    private loadTransactions() {
        this._transactions = this._transactionService.getTransactions();
        this.notifyPropertyChange('transactions', this.transactions);
        this.notifyPropertyChange('totalAmountFormatted', this.totalAmountFormatted);
    }

    private editTransaction(transaction: Transaction) {
        navigateToPage('views/transactions/add-transaction-page', { 
            isIncome: transaction.type === 'income',
            transaction 
        });
    }

    private deleteTransaction(transaction: Transaction) {
        const dialogOptions: ConfirmDialogOptions = {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this transaction?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };

        showDialog(dialogOptions).then(result => {
            if (result) {
                this._transactionService.deleteTransaction(transaction.id);
                this.loadTransactions();
            }
        });
    }
}