export interface MonthlyReport {
    month: number;
    year: number;
    income: number;
    expenses: number;
    savings: number;
    savingsRate: number;
}

export interface FinancialHealthReport {
    netWorth: number;
    debtToIncomeRatio: number;
    monthlyCashflow: number;
    monthlyReports: MonthlyReport[];
}