import { Observable, Frame } from '@nativescript/core';
import { TransactionService } from '../services/transaction-service';
import { AssetService } from '../services/asset-service';
import { LiabilityService } from '../services/liability-service';
import { formatCurrency } from '../utils/formatters';
import { Logger } from '../utils/logger';

const TAG = 'DashboardViewModel';

export class DashboardViewModel extends Observable {
    private _netWorth: number = 0;
    private _monthlyIncome: number = 0;
    private _monthlyExpenses: number = 0;
    private _cashflow: number = 0;
    private transactionService: TransactionService;
    private assetService: AssetService;
    private liabilityService: LiabilityService;

    constructor() {
        super();
        this.transactionService = TransactionService.getInstance();
        this.assetService = AssetService.getInstance();
        this.liabilityService = LiabilityService.getInstance();
        this.calculateFinancials();
    }

    get netWorthFormatted(): string {
        return formatCurrency(this._netWorth);
    }

    get monthlyIncomeFormatted(): string {
        return formatCurrency(this._monthlyIncome);
    }

    get monthlyExpensesFormatted(): string {
        return formatCurrency(this._monthlyExpenses);
    }

    get cashflowFormatted(): string {
        return formatCurrency(this._cashflow);
    }

    onAddIncome() {
        Logger.debug(TAG, 'Navigating to Add Income page');
        Frame.topmost().navigate({
            moduleName: "views/transactions/add-transaction-page",
            context: { isIncome: true }
        });
    }

    onAddExpense() {
        Logger.debug(TAG, 'Navigating to Add Expense page');
        Frame.topmost().navigate({
            moduleName: "views/transactions/add-transaction-page",
            context: { isIncome: false }
        });
    }

    onAddAsset() {
        Logger.debug(TAG, 'Navigating to Add Asset page');
        Frame.topmost().navigate({
            moduleName: "views/assets/add-asset-page"
        });
    }

    onAddLiability() {
        Logger.debug(TAG, 'Navigating to Add Liability page');
        Frame.topmost().navigate({
            moduleName: "views/liabilities/add-liability-page"
        });
    }

    private calculateFinancials() {
        // Calculate net worth
        const totalAssets = this.assetService.getTotalAssetValue();
        const totalLiabilities = this.liabilityService.getTotalLiabilities();
        this._netWorth = totalAssets - totalLiabilities;

        // Calculate monthly income and expenses
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const monthlyTransactions = this.transactionService.getMonthlyTransactions(currentMonth, currentYear);

        this._monthlyIncome = monthlyTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        this._monthlyExpenses = monthlyTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        this._cashflow = this._monthlyIncome - this._monthlyExpenses;

        // Notify property changes
        this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
        this.notifyPropertyChange('monthlyIncomeFormatted', this.monthlyIncomeFormatted);
        this.notifyPropertyChange('monthlyExpensesFormatted', this.monthlyExpensesFormatted);
        this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
    }
}