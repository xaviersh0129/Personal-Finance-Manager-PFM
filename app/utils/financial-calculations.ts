import { Transaction } from '../models/transaction';
import { Asset } from '../models/asset';
import { Liability } from '../models/liability';
import { Logger } from '../utils/logger';

const TAG = 'FinancialCalculations';

export function calculateNetWorth(assets: Asset[], liabilities: Liability[]): number {
    const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
    return totalAssets - totalLiabilities;
}

export function calculateMonthlyCashflow(transactions: Transaction[]): number {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthlyTransactions = transactions.filter(t => 
        t.month === currentMonth && 
        t.year === currentYear
    );

    return monthlyTransactions.reduce((sum, t) => 
        sum + (t.type === 'income' ? t.amount : -t.amount), 0
    );
}

export function calculateWeightedAverageInterestRate(liabilities: Liability[]): number {
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
    
    if (totalLiabilities === 0) return 0;

    const totalInterestPerYear = liabilities.reduce((sum, liability) => 
        sum + (liability.amount * (liability.interestRate / 100)), 0);

    return (totalInterestPerYear / totalLiabilities) * 100;
}

export function calculateDTI(transactions: Transaction[]): number {
    try {
        const totalMonthlyInterest = transactions.reduce((sum, t) => 
            sum + (t.category === 'Credit Card/Loan' ? t.amount : 0), 0);
            
        const totalMonthlyIncome = transactions.reduce((sum, t) => 
            sum + (t.type === 'income' ? t.amount : 0), 0);

        if (totalMonthlyIncome === 0) {
            Logger.debug(TAG, 'DTI calculation: Total monthly income is 0');
            return 0;
        }

        return (totalMonthlyInterest / totalMonthlyIncome) * 100;
    } catch (error) {
        Logger.error(TAG, 'Error calculating DTI', error as Error);
        return 0;
    }
}

export function calculateLR(assets: Asset[], transactions: Transaction[]): number {
    try {
        const currentAssets = assets.reduce((sum, asset) => 
            sum + (asset.category === 'Stocks' || asset.category === 'Saving/Cash' ? asset.value : 0), 0);
            
        const monthlyExpenses = transactions.reduce((sum, t) => 
            sum + (t.type === 'expense' ? t.amount : 0), 0);

        if (monthlyExpenses === 0) {
            Logger.debug(TAG, 'LR calculation: Monthly expenses are 0');
            return 0;
        }

        return currentAssets / monthlyExpenses;
    } catch (error) {
        Logger.error(TAG, 'Error calculating LR', error as Error);
        return 0;
    }
}

export function calculateDAR(assets: Asset[], liabilities: Liability[]): number {
    try {
        const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
        const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);

        if (totalAssets === 0) {
            Logger.debug(TAG, 'DAR calculation: Total assets are 0');
            return 0;
        }

        return (totalLiabilities / totalAssets) * 100;
    } catch (error) {
        Logger.error(TAG, 'Error calculating DAR', error as Error);
        return 0;
    }
}