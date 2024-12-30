import { BaseViewModel } from '../base-view-model';
import { Asset } from '../../models/asset';
import { AssetService } from '../../services/asset-service';
import { formatCurrency } from '../../utils/formatters';
import { navigateToPage } from '../../utils/navigation';
import { showDialog } from '../../utils/dialog';
import { Logger } from '../../utils/logger';
import { AssetDistributionViewModel } from './asset-distribution-view-model';

const TAG = 'AssetListViewModel';

export class AssetListViewModel extends BaseViewModel {
    private _assetService: AssetService;
    private _assets: Asset[] = [];
    private _distributionViewModel: AssetDistributionViewModel;

    constructor() {
        super();
        this._assetService = AssetService.getInstance();
        this._distributionViewModel = new AssetDistributionViewModel();
        this.loadAssets();
    }

    get assets() {
        return this._assets.map(asset => ({
            ...asset,
            formattedValue: formatCurrency(asset.value)
        }));
    }

    get totalAssetsFormatted() {
        return formatCurrency(this._assetService.getTotalAssetValue());
    }

    get distributionViewModel(): AssetDistributionViewModel {
        return this._distributionViewModel;
    }

    refresh(): void {
        Logger.debug(TAG, 'Refreshing assets list');
        this.loadAssets();
    }

    onAddAsset(): void {
        navigateToPage("views/assets/add-asset-page");
    }

    onItemTap(args: { index: number }): void {
        Logger.debug(TAG, 'Asset item tapped');
        const asset = this._assets[args.index];
        showDialog({
            title: asset.name,
            message: `Value: ${formatCurrency(asset.value)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editAsset(asset);
            } else if (result === 'delete') {
                this.deleteAsset(asset);
            }
        }).catch(error => {
            Logger.error(TAG, 'Error handling item tap', error as Error);
        });
    }

    private loadAssets(): void {
        try {
            this._assets = this._assetService.getAssets();
            this._distributionViewModel.updateData(this._assets);
            this.notifyPropertyChange('assets', this.assets);
            this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
            Logger.debug(TAG, `Loaded ${this._assets.length} assets`);
        } catch (error) {
            Logger.error(TAG, 'Error loading assets', error as Error);
        }
    }

    private editAsset(asset: Asset): void {
        Logger.debug(TAG, `Editing asset: ${asset.id}`);
        navigateToPage('views/assets/add-asset-page', { asset });
    }

    private deleteAsset(asset: Asset): void {
        Logger.debug(TAG, `Deleting asset: ${asset.id}`);
        showDialog({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this asset?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result) {
                this._assetService.deleteAsset(asset.id);
                this.loadAssets();
                Logger.debug(TAG, `Asset deleted: ${asset.id}`);
            }
        }).catch(error => {
            Logger.error(TAG, 'Error deleting asset', error as Error);
        });
    }
}