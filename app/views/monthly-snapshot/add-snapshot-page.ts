import { NavigatedData, Page } from '@nativescript/core';
import { AddSnapshotViewModel } from '../../view-models/monthly-snapshot/add-snapshot-view-model';
import { MonthlySnapshot } from '../../models/monthly-snapshot';
import { Logger } from '../../utils/logger';

const TAG = 'AddSnapshotPage';

export function navigatingTo(args: NavigatedData) {
    Logger.debug(TAG, 'Navigating to Add Snapshot page');
    const page = <Page>args.object;
    const existingSnapshot = args.context?.snapshot as MonthlySnapshot | undefined;
    page.bindingContext = new AddSnapshotViewModel(existingSnapshot);
}