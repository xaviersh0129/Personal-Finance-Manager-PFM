import { Observable } from '@nativescript/core';
import { Liability, LiabilityType } from '../../models/liability';
import { ChartColors } from '../../utils/chart-colors';
import { DonutChartData } from '../../components/charts/donut-chart';

export class LiabilityDistributionViewModel extends Observable {
    private _chartData: DonutChartData[] = [];

    get chartData(): DonutChartData[] {
        return this._chartData;
    }

    updateData(liabilities: Liability[]): void {
        const total = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
        
        // Group liabilities by type
        const typeMap = new Map<LiabilityType, number>();
        liabilities.forEach(liability => {
            const current = typeMap.get(liability.type) || 0;
            typeMap.set(liability.type, current + liability.amount);
        });

        // Convert to chart data
        this._chartData = Array.from(typeMap.entries())
            .map(([type, value]) => ({
                label: type,
                value,
                color: type === 'Debt/Payable' ? ChartColors.ShortTerm : ChartColors.LongTerm,
                percentage: total > 0 ? Math.round((value / total) * 100) : 0
            }))
            .sort((a, b) => b.value - a.value);

        this.notifyPropertyChange('chartData', this._chartData);
    }
}