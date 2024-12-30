import { BaseViewModel } from '../base-view-model';
import { Asset, AssetCategory } from '../../models/asset';
import { AssetService } from '../../services/asset-service';
import { Logger } from '../../utils/logger';

const TAG = 'AddAssetViewModel';

export class AddAssetViewModel extends BaseViewModel {
    private _name: string = '';
    private _value: number = 0;
    private _selectedCategoryIndex: number = 0;
    private _categories: AssetCategory[] = [
        'Real Estate', 'Business', 'Stocks', 'Art & Antiquities', 'Saving/Cash'
    ];
    private _assetService: AssetService;
    private _existingAsset?: Asset;

    constructor(existingAsset?: Asset) {
        super();
        this._assetService = AssetService.getInstance();
        this._existingAsset = existingAsset;

        if (existingAsset) {
            this.initializeWithExistingAsset(existingAsset);
        }
    }

    private initializeWithExistingAsset(asset: Asset) {
        this._name = asset.name;
        this._value = asset.value;
        this._selectedCategoryIndex = this._categories.indexOf(asset.category);
    }

    get name(): string { return this._name; }
    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }

    get value(): number { return this._value; }
    set value(value: number | string) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._value !== numericValue) {
            this._value = numericValue;
            this.notifyPropertyChange('value', numericValue);
        }
    }

    get categories(): AssetCategory[] { return this._categories; }
    get selectedCategoryIndex(): number { return this._selectedCategoryIndex; }
    set selectedCategoryIndex(value: number) {
        if (this._selectedCategoryIndex !== value) {
            this._selectedCategoryIndex = value;
            this.notifyPropertyChange('selectedCategoryIndex', value);
        }
    }

    onSave() {
        try {
            if (!this._name.trim()) {
                throw new Error('Asset name is required');
            }

            if (isNaN(this._value) || this._value <= 0) {
                throw new Error('Asset value must be greater than 0');
            }

            const asset = new Asset({
                ...(this._existingAsset && { id: this._existingAsset.id }),
                name: this._name.trim(),
                value: this._value,
                category: this._categories[this._selectedCategoryIndex]
            });

            if (this._existingAsset) {
                this._assetService.updateAsset(asset);
                Logger.debug(TAG, `Successfully updated asset: ${asset.name}`);
            } else {
                this._assetService.addAsset(asset);
                Logger.debug(TAG, `Successfully added asset: ${asset.name}`);
            }

            this.goBack();
        } catch (error) {
            Logger.error(TAG, 'Error saving asset', error as Error);
        }
    }
}