import { Observable } from '@nativescript/core';
import { Asset, AssetCategory } from '../../models/asset';
import { ChartColors } from '../../utils/chart-colors';
import { DonutChartData } from '../../components/charts/donut-chart';

export class AssetDistributionViewModel extends Observable {
    private _chartData: DonutChartData[] = [];

    get chartData(): DonutChartData[] {
        return this._chartData;
    }

    updateData(assets: Asset[]): void {
        const total = assets.reduce((sum, asset) => sum + asset.value, 0);
        
        // Group assets by category
        const categoryMap = new Map<AssetCategory, number>();
        assets.forEach(asset => {
            const current = categoryMap.get(asset.category) || 0;
            categoryMap.set(asset.category, current + asset.value);
        });

        // Convert to chart data
        this._chartData = Array.from(categoryMap.entries())
            .map(([category, value]) => ({
                label: category,
                value,
                color: ChartColors[category],
                percentage: total > 0 ? Math.round((value / total) * 100) : 0
            }))
            .sort((a, b) => b.value - a.value);

        this.notifyPropertyChange('chartData', this._chartData);
    }
}