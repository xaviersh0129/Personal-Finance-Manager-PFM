import { NavigatedData, Page } from '@nativescript/core';
import { MonthlySnapshotViewModel } from '../../view-models/monthly-snapshot/monthly-snapshot-view-model';
import { Logger } from '../../utils/logger';

const TAG = 'MonthlySnapshotPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Monthly Snapshot page');
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new MonthlySnapshotViewModel();
    }
}

export function navigatedTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigated to Monthly Snapshot page');
    const page = <Page>args.object;
    const viewModel = page.bindingContext as MonthlySnapshotViewModel;
    viewModel?.refresh();
}

export function unloaded(args: NavigatedData) {
    Logger.debug(TAG, 'Monthly Snapshot page unloaded');
    const page = <Page>args.object;
    const viewModel = page.bindingContext as MonthlySnapshotViewModel;
    viewModel?.onUnloaded();
}