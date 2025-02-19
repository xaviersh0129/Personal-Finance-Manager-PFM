import { BaseViewModel } from '../base-view-model';
import { Liability, LiabilityType } from '../../models/liability';
import { LiabilityService } from '../../services/liability-service';
import { Logger } from '../../utils/logger';

const TAG = 'AddLiabilityViewModel';

export class AddLiabilityViewModel extends BaseViewModel {
    private _name: string = '';
    private _amount: number = 0;
    private _interestRate: number = 0;
    private _selectedTypeIndex: number = 0;
    private _types: LiabilityType[] = ['Loan', 'Debt/Payable'];
    private _liabilityService: LiabilityService;
    private _existingLiability?: Liability;

    constructor(existingLiability?: Liability) {
        super();
        this._liabilityService = LiabilityService.getInstance();
        this._existingLiability = existingLiability;

        if (existingLiability) {
            this.initializeWithExistingLiability(existingLiability);
        }
    }

    private initializeWithExistingLiability(liability: Liability) {
        this._name = liability.name;
        this._amount = liability.amount;
        this._interestRate = liability.interestRate;
        this._selectedTypeIndex = this._types.indexOf(liability.type);
    }

    get name(): string { return this._name; }
    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }

    get amount(): number { return this._amount; }
    set amount(value: number | string) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._amount !== numericValue) {
            this._amount = numericValue;
            this.notifyPropertyChange('amount', numericValue);
        }
    }

    get interestRate(): number { return this._interestRate; }
    set interestRate(value: number | string) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._interestRate !== numericValue) {
            this._interestRate = numericValue;
            this.notifyPropertyChange('interestRate', numericValue);
        }
    }

    get types(): LiabilityType[] { return this._types; }
    get selectedTypeIndex(): number { return this._selectedTypeIndex; }
    set selectedTypeIndex(value: number) {
        if (this._selectedTypeIndex !== value) {
            this._selectedTypeIndex = value;
            this.notifyPropertyChange('selectedTypeIndex', value);
        }
    }

    get isEditing(): boolean { return !!this._existingLiability; }

    onSave() {
        try {
            if (!this._name.trim()) {
                throw new Error('Liability name is required');
            }

            if (isNaN(this._amount) || this._amount <= 0) {
                throw new Error('Liability amount must be greater than 0');
            }

            if (isNaN(this._interestRate) || this._interestRate < 0) {
                throw new Error('Interest rate must be 0 or greater');
            }

            const liability = new Liability({
                ...(this._existingLiability && { id: this._existingLiability.id }),
                name: this._name.trim(),
                amount: this._amount,
                interestRate: this._interestRate,
                type: this._types[this._selectedTypeIndex]
            });

            if (this._existingLiability) {
                this._liabilityService.updateLiability(liability);
                Logger.debug(TAG, `Successfully updated liability: ${liability.name}`);
            } else {
                this._liabilityService.addLiability(liability);
                Logger.debug(TAG, `Successfully added liability: ${liability.name}`);
            }

            this.goBack();
        } catch (error) {
            Logger.error(TAG, 'Error saving liability', error as Error);
        }
    }
}