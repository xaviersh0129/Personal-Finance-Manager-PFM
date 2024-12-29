import { Liability } from '../models/liability';
import { BaseService } from './base-service';
import { StorageKeys } from '../constants/storage-keys';

export class LiabilityService extends BaseService<Liability> {
    private static instance: LiabilityService;
    protected readonly TAG = 'LiabilityService';
    protected readonly storageKey = StorageKeys.LIABILITIES;

    private constructor() {
        super();
    }

    static getInstance(): LiabilityService {
        if (!LiabilityService.instance) {
            LiabilityService.instance = new LiabilityService();
        }
        return LiabilityService.instance;
    }

    protected transformLoadedItems(items: any[]): Liability[] {
        return items.map(data => new Liability(data));
    }

    addLiability(liability: Liability): void {
        this.addItem(liability);
    }

    updateLiability(liability: Liability): void {
        this.updateItem(liability);
    }

    deleteLiability(id: string): void {
        this.deleteItem(id);
    }

    getLiabilities(): Liability[] {
        return this.getItems();
    }

    getTotalLiabilities(): number {
        return this.items.reduce((sum, liability) => sum + liability.amount, 0);
    }
}