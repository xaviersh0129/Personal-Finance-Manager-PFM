import { Transaction } from '../models/transaction';
import { Asset } from '../models/asset';
import { Liability } from '../models/liability';

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

export function calculateDebtToIncomeRatio(
    monthlyIncome: number, 
    liabilities: Liability[]
): number {
    const monthlyDebtPayments = liabilities.reduce((sum, liability) => {
        // Simple monthly payment calculation
        const monthlyRate = liability.interestRate / 12 / 100;
        const months = liability.type === 'Debt/Payable' ? 12 : 360; // 1 year or 30 years
        const payment = (liability.amount * monthlyRate * Math.pow(1 + monthlyRate, months)) 
            / (Math.pow(1 + monthlyRate, months) - 1);
        return sum + payment;
    }, 0);

    return monthlyDebtPayments / monthlyIncome;
}