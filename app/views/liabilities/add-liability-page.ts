import { NavigatedData, Page } from '@nativescript/core';
import { AddLiabilityViewModel } from '../../view-models/liabilities/add-liability-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new AddLiabilityViewModel();
}