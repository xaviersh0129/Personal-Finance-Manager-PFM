import { BaseViewModel } from '../base-view-model';
import { Liability } from '../../models/liability';
import { LiabilityService } from '../../services/liability-service';
import { formatCurrency, formatPercentage } from '../../utils/formatters';
import { navigateToPage } from '../../utils/navigation';
import { showDialog, ConfirmDialogOptions } from '../../utils/dialog';
import { Logger } from '../../utils/logger';
import { LiabilityDistributionViewModel } from './liability-distribution-view-model';

const TAG = 'LiabilityListViewModel';

export class LiabilityListViewModel extends BaseViewModel {
    private _liabilityService: LiabilityService;
    private _liabilities: Liability[] = [];
    private _distributionViewModel: LiabilityDistributionViewModel;

    constructor() {
        super();
        this._liabilityService = LiabilityService.getInstance();
        this._distributionViewModel = new LiabilityDistributionViewModel();
        this.loadLiabilities();
    }

    get liabilities() {
        return this._liabilities.map(liability => ({
            ...liability,
            formattedAmount: formatCurrency(liability.amount),
            formattedInterestRate: formatPercentage(liability.interestRate)
        }));
    }

    get totalLiabilitiesFormatted() {
        return formatCurrency(this._liabilityService.getTotalLiabilities());
    }

    get distributionViewModel(): LiabilityDistributionViewModel {
        return this._distributionViewModel;
    }

    refresh(): void {
        Logger.debug(TAG, 'Refreshing liabilities list');
        this.loadLiabilities();
    }

    onAddLiability(): void {
        navigateToPage("views/liabilities/add-liability-page");
    }

    onItemTap(args: { index: number }): void {
        const liability = this._liabilities[args.index];
        showDialog({
            title: liability.name,
            message: `Amount: ${formatCurrency(liability.amount)}\nInterest Rate: ${formatPercentage(liability.interestRate)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editLiability(liability);
            } else if (result === 'delete') {
                this.deleteLiability(liability);
            }
        });
    }

    private loadLiabilities(): void {
        try {
            this._liabilities = this._liabilityService.getLiabilities();
            this._distributionViewModel.updateData(this._liabilities);
            this.notifyPropertyChange('liabilities', this.liabilities);
            this.notifyPropertyChange('totalLiabilitiesFormatted', this.totalLiabilitiesFormatted);
            Logger.debug(TAG, `Loaded ${this._liabilities.length} liabilities`);
        } catch (error) {
            Logger.error(TAG, 'Error loading liabilities', error as Error);
        }
    }

    private editLiability(liability: Liability): void {
        navigateToPage('views/liabilities/add-liability-page', { liability });
    }

    private deleteLiability(liability: Liability): void {
        const dialogOptions: ConfirmDialogOptions = {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this liability?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };

        showDialog(dialogOptions).then(result => {
            if (result) {
                this._liabilityService.deleteLiability(liability.id);
                this.loadLiabilities();
            }
        });
    }
}