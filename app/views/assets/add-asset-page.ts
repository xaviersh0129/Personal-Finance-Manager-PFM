import { NavigatedData, Page } from '@nativescript/core';
import { AddAssetViewModel } from '../../view-models/assets/add-asset-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new AddAssetViewModel();
}