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