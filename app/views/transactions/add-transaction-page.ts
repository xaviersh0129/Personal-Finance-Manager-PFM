import { NavigatedData, Page } from '@nativescript/core';
import { AddTransactionViewModel } from '../../view-models/transactions/add-transaction-view-model';
import { Logger } from '../../utils/logger';
import { Transaction } from '../../models/transaction';

const TAG = 'AddTransactionPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Add Transaction page');
    const page = <Page>args.object;
    const isIncome = args.context?.isIncome ?? false;
    const transaction = args.context?.transaction as Transaction | undefined;
    
    page.bindingContext = new AddTransactionViewModel(isIncome, transaction);
    
    // Set the ActionBar title based on whether we're editing or adding
    const action = transaction ? 'Edit' : 'Add';
    const type = isIncome ? 'Income' : 'Expense';
    page.actionBar.title = `${action} ${type}`;
}

export function navigatingFrom(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating from Add Transaction page');
    const page = <Page>args.object;
    page.bindingContext = null;
}