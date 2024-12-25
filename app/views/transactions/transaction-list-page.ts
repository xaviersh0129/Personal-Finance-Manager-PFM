import { NavigatedData, Page } from '@nativescript/core';
import { TransactionListViewModel } from '../../view-models/transactions/transaction-list-view-model';
import { Logger } from '../../utils/logger';

const TAG = 'TransactionListPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Transaction List page');
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new TransactionListViewModel(args.context?.filterType);
    }
}

export function navigatedTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigated to Transaction List page');
    const page = <Page>args.object;
    const viewModel = page.bindingContext as TransactionListViewModel;
    viewModel?.refresh();
}