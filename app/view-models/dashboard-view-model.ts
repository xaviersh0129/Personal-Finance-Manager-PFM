import { Observable } from '@nativescript/core';
import { TransactionService } from '../services/transaction-service';
import { AssetService } from '../services/asset-service';
import { LiabilityService } from '../services/liability-service';
import { MonthlySnapshotService } from '../services/monthly-snapshot-service';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import { Logger } from '../utils/logger';

const TAG = 'DashboardViewModel';

export class DashboardViewModel extends Observable {
    private _netWorth: number = 0;
    private _totalIncome: number = 0;
    private _totalExpenses: number = 0;
    private _totalAssets: number = 0;
    private _totalLiabilities: number = 0;
    private _cashflow: number = 0;
    private _hourlyRate: number = 0;
    private _sharpeRatio: number | null = null;
    private transactionService: TransactionService;
    private assetService: AssetService;
    private liabilityService: LiabilityService;
    private monthlySnapshotService: MonthlySnapshotService;

    constructor() {
        super();
        this.transactionService = TransactionService.getInstance();
        this.assetService = AssetService.getInstance();
        this.liabilityService = LiabilityService.getInstance();
        this.monthlySnapshotService = MonthlySnapshotService.getInstance();
        this.calculateFinancials();
    }

    get netWorthFormatted(): string {
        return formatCurrency(this._netWorth);
    }

    get totalIncomeFormatted(): string {
        return formatCurrency(this._totalIncome);
    }

    get totalExpensesFormatted(): string {
        return formatCurrency(this._totalExpenses);
    }

    get totalAssetsFormatted(): string {
        return formatCurrency(this._totalAssets);
    }

    get totalLiabilitiesFormatted(): string {
        return formatCurrency(this._totalLiabilities);
    }

    get cashflowFormatted(): string {
        return formatCurrency(this._cashflow);
    }

    get hourlyRateFormatted(): string {
        return formatCurrency(Math.round(this._hourlyRate * 100) / 100);
    }

    get cashflow(): number {
        return this._cashflow;
    }

    get sharpeRatioFormatted(): string {
        return this._sharpeRatio !== null 
            ? formatPercentage(this._sharpeRatio, false)
            : 'N/A';
    }

    private calculateFinancials() {
        try {
            // Calculate totals
            this._totalAssets = this.assetService.getTotalAssetValue();
            this._totalLiabilities = this.liabilityService.getTotalLiabilities();
            this._totalIncome = this.transactionService.getTotalIncome();
            this._totalExpenses = this.transactionService.getTotalExpenses();

            // Calculate net worth
            this._netWorth = this._totalAssets - this._totalLiabilities;

            // Calculate monthly cashflow
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const currentYear = currentDate.getFullYear();
            const monthlyTransactions = this.transactionService.getMonthlyTransactions(currentMonth, currentYear);

            const monthlyIncome = monthlyTransactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);

            const monthlyExpenses = monthlyTransactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);

            this._cashflow = monthlyIncome - monthlyExpenses;

            // Calculate hourly rate
            const totalTimeRequired = this.transactionService.getTotalTimeRequired();
            this._hourlyRate = totalTimeRequired > 0 ? this._totalIncome / totalTimeRequired : 0;

            // Calculate Sharpe Ratio
            this._sharpeRatio = this.monthlySnapshotService.calculateSharpeRatio();

            // Notify all property changes
            this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
            this.notifyPropertyChange('totalIncomeFormatted', this.totalIncomeFormatted);
            this.notifyPropertyChange('totalExpensesFormatted', this.totalExpensesFormatted);
            this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
            this.notifyPropertyChange('totalLiabilitiesFormatted', this.totalLiabilitiesFormatted);
            this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
            this.notifyPropertyChange('cashflow', this.cashflow);
            this.notifyPropertyChange('hourlyRateFormatted', this.hourlyRateFormatted);
            this.notifyPropertyChange('sharpeRatioFormatted', this.sharpeRatioFormatted);

            Logger.debug(TAG, 'Financial calculations completed successfully');
        } catch (error) {
            Logger.error(TAG, 'Error calculating financials', error as Error);
        }
    }
}