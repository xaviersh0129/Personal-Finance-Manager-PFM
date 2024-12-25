import { Observable } from '@nativescript/core';
import { TransactionService } from './transaction-service';
import { AssetService } from './asset-service';
import { LiabilityService } from './liability-service';
import { FinancialHealthReport, MonthlyReport } from '../models/financial-report';
import { 
    calculateNetWorth, 
    calculateMonthlyCashflow,
    calculateDebtToIncomeRatio 
} from '../utils/financial-calculations';

export class ReportService extends Observable {
    private static instance: ReportService;
    private transactionService: TransactionService;
    private assetService: AssetService;
    private liabilityService: LiabilityService;

    private constructor() {
        super();
        this.transactionService = TransactionService.getInstance();
        this.assetService = AssetService.getInstance();
        this.liabilityService = LiabilityService.getInstance();
    }

    static getInstance(): ReportService {
        if (!ReportService.instance) {
            ReportService.instance = new ReportService();
        }
        return ReportService.instance;
    }

    generateFinancialHealthReport(): FinancialHealthReport {
        const assets = this.assetService.getAssets();
        const liabilities = this.liabilityService.getLiabilities();
        const transactions = this.transactionService.getTransactions();
        
        const monthlyIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0) / 12;

        return {
            netWorth: calculateNetWorth(assets, liabilities),
            debtToIncomeRatio: calculateDebtToIncomeRatio(monthlyIncome, liabilities),
            monthlyCashflow: calculateMonthlyCashflow(transactions),
            monthlyReports: this.generateMonthlyReports()
        };
    }

    private generateMonthlyReports(): MonthlyReport[] {
        const reports: MonthlyReport[] = [];
        const currentDate = new Date();
        
        // Generate reports for the last 12 months
        for (let i = 0; i < 12; i++) {
            const month = (currentDate.getMonth() - i + 12) % 12;
            const year = currentDate.getFullYear() - Math.floor(i / 12);
            
            const monthTransactions = this.transactionService
                .getMonthlyTransactions(month, year);
            
            const income = monthTransactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);
            
            const expenses = monthTransactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);
            
            const savings = income - expenses;
            const savingsRate = income > 0 ? (savings / income) * 100 : 0;

            reports.push({
                month,
                year,
                income,
                expenses,
                savings,
                savingsRate
            });
        }

        return reports;
    }
}