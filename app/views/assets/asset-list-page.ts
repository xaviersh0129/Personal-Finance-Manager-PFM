import { NavigatedData, Page } from '@nativescript/core';
import { AssetListViewModel } from '../../view-models/assets/asset-list-view-model';
import { Logger } from '../../utils/logger';

const TAG = 'AssetListPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Asset List page');
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new AssetListViewModel();
    }
}

export function navigatedTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigated to Asset List page');
    const page = <Page>args.object;
    const viewModel = page.bindingContext as AssetListViewModel;
    viewModel?.refresh();
}