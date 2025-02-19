import { Observable } from '@nativescript/core';
import { navigateToPage } from '../utils/navigation';
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

    // Navigation methods
    onNavigateToIncome() {
        navigateToPage('views/transactions/transaction-list-page', { filterType: 'income' });
    }

    onNavigateToExpense() {
        navigateToPage('views/transactions/transaction-list-page', { filterType: 'expense' });
    }

    onNavigateToAssets() {
        navigateToPage('views/assets/asset-list-page');
    }

    onNavigateToLiabilities() {
        navigateToPage('views/liabilities/liability-list-page');
    }

    onNavigateToMonthlySnapshot() {
        navigateToPage('views/monthly-snapshot/monthly-snapshot-page');
    }

    // Formatted getters
    get netWorthFormatted(): string {
        return formatCurrency(this._netWorth);
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

            // Calculate metrics
            this._netWorth = calculateNetWorth(assets, liabilities);
            this._cashflow = calculateMonthlyCashflow(transactions);
            
            const totalTimeRequired = this.transactionService.getTotalTimeRequired();
            this._hourlyRate = totalTimeRequired > 0 ? this._totalIncome / totalTimeRequired : 0;
            
            this._sharpeRatio = this.monthlySnapshotService.calculateSharpeRatio();
            this._weightedInterestRate = calculateWeightedAverageInterestRate(liabilities);
            this._dti = calculateDTI(transactions);
            this._lr = calculateLR(assets, transactions);
            this._dar = calculateDAR(assets, liabilities);

            // Notify property changes
            this.notifyPropertyChanges();
            
            Logger.debug(TAG, 'Financial calculations completed successfully');
        } catch (error) {
            Logger.error(TAG, 'Error calculating financials', error as Error);
        }
    }

    private notifyPropertyChanges() {
        this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
        this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
        this.notifyPropertyChange('cashflow', this.cashflow);
        this.notifyPropertyChange('hourlyRateFormatted', this.hourlyRateFormatted);
        this.notifyPropertyChange('sharpeRatioFormatted', this.sharpeRatioFormatted);
        this.notifyPropertyChange('weightedInterestRateFormatted', this.weightedInterestRateFormatted);
        this.notifyPropertyChange('dtiFormatted', this.dtiFormatted);
        this.notifyPropertyChange('lrFormatted', this.lrFormatted);
        this.notifyPropertyChange('darFormatted', this.darFormatted);
    }
}