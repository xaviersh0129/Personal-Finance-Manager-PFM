import { BaseViewModel } from '../base-view-model';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { formatCurrency } from '../../utils/formatters';
import { navigateToPage } from '../../utils/navigation';
import { showDialog, ConfirmDialogOptions } from '../../utils/dialog';
import { Logger } from '../../utils/logger';
import { TransactionDistributionViewModel } from './transaction-distribution-view-model';

const TAG = 'TransactionListViewModel';

export class TransactionListViewModel extends BaseViewModel {
    private _transactions: Transaction[] = [];
    private _filterType: 'income' | 'expense' | undefined;
    private _transactionService: TransactionService;
    private _distributionViewModel: TransactionDistributionViewModel;

    constructor(filterType?: 'income' | 'expense') {
        super();
        this._filterType = filterType;
        this._transactionService = TransactionService.getInstance();
        this._distributionViewModel = new TransactionDistributionViewModel();
        this.loadTransactions();
    }

    get filterType(): 'income' | 'expense' | undefined {
        return this._filterType;
    }

    get distributionViewModel(): TransactionDistributionViewModel {
        return this._distributionViewModel;
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
            hourlyRateFormatted: transaction.type === 'income' && transaction.timeRequired 
                ? formatCurrency(Math.round((transaction.amount / transaction.timeRequired) * 100) / 100)
                : ''
        }));
    }

    refresh(): void {
        Logger.debug(TAG, 'Refreshing transactions list');
        this.loadTransactions();
    }

    onAddTransaction(): void {
        navigateToPage('views/transactions/add-transaction-page', { 
            isIncome: this._filterType === 'income' 
        });
    }

    onItemTap(args: { index: number }): void {
        const transaction = this._transactions.filter(t => t.type === this._filterType)[args.index];
        const hourlyRate = transaction.type === 'income' && transaction.timeRequired
            ? `\nHourly Rate: ${formatCurrency(transaction.amount / transaction.timeRequired)}/hr`
            : '';
            
        showDialog({
            title: transaction.description,
            message: `Amount: ${formatCurrency(transaction.amount)}${hourlyRate}`,
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

    private loadTransactions(): void {
        try {
            this._transactions = this._transactionService.getTransactions();
            if (this._filterType) {
                this._distributionViewModel.updateData(this._transactions, this._filterType);
            }
            this.notifyPropertyChange('transactions', this.transactions);
            this.notifyPropertyChange('totalAmountFormatted', this.totalAmountFormatted);
            Logger.debug(TAG, `Loaded ${this._transactions.length} transactions`);
        } catch (error) {
            Logger.error(TAG, 'Error loading transactions', error as Error);
        }
    }

    private editTransaction(transaction: Transaction): void {
        Logger.debug(TAG, `Editing transaction: ${transaction.id}`);
        navigateToPage('views/transactions/add-transaction-page', { 
            isIncome: transaction.type === 'income',
            transaction 
        });
    }

    private deleteTransaction(transaction: Transaction): void {
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