import { NavigatedData, Page } from '@nativescript/core';
import { AddLiabilityViewModel } from '../../view-models/liabilities/add-liability-view-model';
import { Liability } from '../../models/liability';
import { Logger } from '../../utils/logger';

const TAG = 'AddLiabilityPage';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const existingLiability = args.context?.liability as Liability | undefined;
    
    Logger.debug(TAG, existingLiability ? 'Editing existing liability' : 'Adding new liability');
    page.bindingContext = new AddLiabilityViewModel(existingLiability);
    
    // Update the ActionBar title based on whether we're editing or adding
    const actionBarTitle = existingLiability ? 'Edit Liability' : 'Add Liability';
    page.actionBar.title = actionBarTitle;
}