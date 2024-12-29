import { Observable } from '@nativescript/core';

export type LiabilityType = 'Loan' | 'Debt/Payable';

export class Liability extends Observable {
    id: string;
    type: LiabilityType;
    amount: number;
    name: string;
    interestRate: number;

    constructor(data: Partial<Liability>) {
        super();
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'Loan';
        this.amount = data.amount || 0;
        this.name = data.name || '';
        this.interestRate = data.interestRate || 0;
    }
}