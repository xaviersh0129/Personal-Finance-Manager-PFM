import { Asset } from '../models/asset';
import { BaseService } from './base-service';
import { StorageKeys } from '../constants/storage-keys';

export class AssetService extends BaseService<Asset> {
    private static instance: AssetService;
    protected readonly TAG = 'AssetService';
    protected readonly storageKey = StorageKeys.ASSETS;

    private constructor() {
        super();
    }

    static getInstance(): AssetService {
        if (!AssetService.instance) {
            AssetService.instance = new AssetService();
        }
        return AssetService.instance;
    }

    protected transformLoadedItems(items: any[]): Asset[] {
        return items.map(data => new Asset({
            ...data,
            purchaseDate: new Date(data.purchaseDate)
        }));
    }

    addAsset(asset: Asset): void {
        this.addItem(asset);
    }

    updateAsset(asset: Asset): void {
        this.updateItem(asset);
    }

    deleteAsset(id: string): void {
        this.deleteItem(id);
    }

    getAssets(): Asset[] {
        return this.getItems();
    }

    getTotalAssetValue(): number {
        return this.items.reduce((sum, asset) => sum + asset.value, 0);
    }
}