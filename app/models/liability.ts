import { Observable } from '@nativescript/core';

export type LiabilityType = 'Short-term' | 'Long-term';

export class Liability extends Observable {
  id: string;
  type: LiabilityType;
  amount: number;
  name: string;
  dueDate: Date;
  interestRate: number;

  constructor(data: Partial<Liability>) {
    super();
    this.id = data.id || crypto.randomUUID();
    this.type = data.type || 'Short-term';
    this.amount = data.amount || 0;
    this.name = data.name || '';
    this.dueDate = data.dueDate || new Date();
    this.interestRate = data.interestRate || 0;
  }
}