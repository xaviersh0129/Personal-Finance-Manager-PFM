import { NavigatedData, Page } from '@nativescript/core';
import { LiabilityListViewModel } from '../../view-models/liabilities/liability-list-view-model';
import { Logger } from '../../utils/logger';

const TAG = 'LiabilityListPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Liability List page');
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new LiabilityListViewModel();
    }
}

export function navigatedTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigated to Liability List page');
    const page = <Page>args.object;
    const viewModel = page.bindingContext as LiabilityListViewModel;
    viewModel?.refresh();
}