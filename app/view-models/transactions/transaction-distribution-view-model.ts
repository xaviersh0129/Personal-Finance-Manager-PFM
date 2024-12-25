import { Observable } from '@nativescript/core';
import { Transaction, TransactionCategory } from '../../models/transaction';
import { ChartColors } from '../../utils/chart-colors';
import { DonutChartData } from '../../components/charts/donut-chart';

export class TransactionDistributionViewModel extends Observable {
    private _chartData: DonutChartData[] = [];

    get chartData(): DonutChartData[] {
        return this._chartData;
    }

    updateData(transactions: Transaction[], type: 'income' | 'expense'): void {
        const filteredTransactions = transactions.filter(t => t.type === type);
        const total = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
        
        // Group transactions by category
        const categoryMap = new Map<TransactionCategory, number>();
        filteredTransactions.forEach(transaction => {
            const current = categoryMap.get(transaction.category) || 0;
            categoryMap.set(transaction.category, current + transaction.amount);
        });

        // Convert to chart data
        this._chartData = Array.from(categoryMap.entries())
            .map(([category, value]) => ({
                label: category,
                value,
                color: ChartColors[category] || '#CBD5E0', // Default color if not found
                percentage: total > 0 ? Math.round((value / total) * 100) : 0
            }))
            .sort((a, b) => b.value - a.value);

        this.notifyPropertyChange('chartData', this._chartData);
    }
}