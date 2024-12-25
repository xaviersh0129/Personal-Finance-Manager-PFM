import { NavigatedData, Page } from '@nativescript/core';
import { TransactionListViewModel } from '../../view-models/transactions/transaction-list-view-model';
import { Logger } from '../../utils/logger';

const TAG = 'TransactionListPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Transaction List page');
    const page = <Page>args.object;
    const filterType = args.context?.filterType;
    
    if (!page.bindingContext) {
        page.bindingContext = new TransactionListViewModel(filterType);
    }

    // Set the ActionBar title based on the filter type
    page.actionBar.title = filterType === 'income' ? 'Income' : 'Expenses';
}