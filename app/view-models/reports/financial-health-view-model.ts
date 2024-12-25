import { Observable } from '@nativescript/core';
import { ReportService } from '../../services/report-service';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

export class FinancialHealthViewModel extends Observable {
    private _reportService: ReportService;
    private _report: any;

    constructor() {
        super();
        this._reportService = ReportService.getInstance();
        this.loadReport();
    }

    get netWorthFormatted(): string {
        return formatCurrency(this._report.netWorth);
    }

    get monthlyCashflowFormatted(): string {
        return formatCurrency(this._report.monthlyCashflow);
    }

    get debtToIncomeRatioFormatted(): string {
        return formatPercentage(this._report.debtToIncomeRatio * 100);
    }

    get monthlyReports() {
        return this._report.monthlyReports.map(report => ({
            ...report,
            monthYear: `${new Date(report.year, report.month).toLocaleString('default', { month: 'short', year: 'numeric' })}`,
            incomeFormatted: formatCurrency(report.income),
            expensesFormatted: formatCurrency(report.expenses),
            savingsRateFormatted: formatPercentage(report.savingsRate)
        }));
    }

    private loadReport() {
        this._report = this._reportService.generateFinancialHealthReport();
        this.notifyPropertyChange('monthlyReports', this.monthlyReports);
    }
}