import { BaseViewModel } from '../base-view-model';
import { Asset } from '../../models/asset';
import { AssetService } from '../../services/asset-service';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { navigateToPage } from '../../utils/navigation';
import { showDialog, ConfirmDialogOptions } from '../../utils/dialog';
import { Logger } from '../../utils/logger';

const TAG = 'AssetListViewModel';

export class AssetListViewModel extends BaseViewModel {
    private _assetService: AssetService;
    private _assets: Asset[] = [];

    constructor() {
        super();
        this._assetService = AssetService.getInstance();
        this.loadAssets();
    }

    get assets() {
        return this._assets.map(asset => ({
            ...asset,
            formattedValue: formatCurrency(asset.value),
            formattedDate: formatDate(asset.purchaseDate)
        }));
    }

    get totalAssetsFormatted() {
        return formatCurrency(this._assetService.getTotalAssetValue());
    }

    onAddAsset() {
        navigateToPage("views/assets/add-asset-page");
    }

    onItemTap(args: { index: number }) {
        const asset = this._assets[args.index];
        showDialog({
            title: asset.name,
            message: `Value: ${formatCurrency(asset.value)}\nPurchase Date: ${formatDate(asset.purchaseDate)}`,
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
        });
    }

    private loadAssets() {
        this._assets = this._assetService.getAssets();
        this.notifyPropertyChange('assets', this.assets);
        this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
    }

    private editAsset(asset: Asset) {
        navigateToPage('views/assets/add-asset-page', { asset });
    }

    private deleteAsset(asset: Asset) {
        const dialogOptions: ConfirmDialogOptions = {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this asset?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };

        showDialog(dialogOptions).then(result => {
            if (result) {
                this._assetService.deleteAsset(asset.id);
                this.loadAssets();
            }
        });
    }
}