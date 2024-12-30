import { Observable } from '@nativescript/core';
import { TransactionService } from '../services/transaction-service';
import { AssetService } from '../services/asset-service';
import { LiabilityService } from '../services/liability-service';
import { MonthlySnapshotService } from '../services/monthly-snapshot-service';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import { 
    calculateNetWorth, 
    calculateMonthlyCashflow, 
    calculateWeightedAverageInterestRate,
    calculateDTI,
    calculateLR,
    calculateDAR
} from '../utils/financial-calculations';
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
    private _weightedInterestRate: number = 0;
    private _dti: number = 0;
    private _lr: number = 0;
    private _dar: number = 0;

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

    // Existing getters...
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

    get weightedInterestRateFormatted(): string {
        return formatPercentage(this._weightedInterestRate);
    }

    // New getters for financial ratios
    get dtiFormatted(): string {
        return formatPercentage(this._dti);
    }

    get lrFormatted(): string {
        return this._lr.toFixed(2);
    }

    get darFormatted(): string {
        return formatPercentage(this._dar);
    }

    private calculateFinancials() {
        try {
            const assets = this.assetService.getAssets();
            const liabilities = this.liabilityService.getLiabilities();
            const transactions = this.transactionService.getTransactions();

            // Calculate totals
            this._totalAssets = this.assetService.getTotalAssetValue();
            this._totalLiabilities = this.liabilityService.getTotalLiabilities();
            this._totalIncome = this.transactionService.getTotalIncome();
            this._totalExpenses = this.transactionService.getTotalExpenses();

            // Calculate net worth
            this._netWorth = calculateNetWorth(assets, liabilities);

            // Calculate monthly cashflow
            this._cashflow = calculateMonthlyCashflow(transactions);

            // Calculate hourly rate
            const totalTimeRequired = this.transactionService.getTotalTimeRequired();
            this._hourlyRate = totalTimeRequired > 0 ? this._totalIncome / totalTimeRequired : 0;

            // Calculate Sharpe Ratio
            this._sharpeRatio = this.monthlySnapshotService.calculateSharpeRatio();

            // Calculate weighted average interest rate
            this._weightedInterestRate = calculateWeightedAverageInterestRate(liabilities);

            // Calculate new financial ratios
            this._dti = calculateDTI(transactions);
            this._lr = calculateLR(assets, transactions);
            this._dar = calculateDAR(assets, liabilities);

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
            this.notifyPropertyChange('weightedInterestRateFormatted', this.weightedInterestRateFormatted);
            this.notifyPropertyChange('dtiFormatted', this.dtiFormatted);
            this.notifyPropertyChange('lrFormatted', this.lrFormatted);
            this.notifyPropertyChange('darFormatted', this.darFormatted);

            Logger.debug(TAG, 'Financial calculations completed successfully');
        } catch (error) {
            Logger.error(TAG, 'Error calculating financials', error as Error);
        }
    }
}