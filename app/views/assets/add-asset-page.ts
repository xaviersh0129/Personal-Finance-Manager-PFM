import { NavigatedData, Page } from '@nativescript/core';
import { AddAssetViewModel } from '../../view-models/assets/add-asset-view-model';
import { Asset } from '../../models/asset';
import { Logger } from '../../utils/logger';

const TAG = 'AddAssetPage';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const existingAsset = args.context?.asset as Asset | undefined;
    
    Logger.debug(TAG, existingAsset ? 'Editing existing asset' : 'Adding new asset');
    page.bindingContext = new AddAssetViewModel(existingAsset);
    
    // Update the ActionBar title based on whether we're editing or adding
    const actionBarTitle = existingAsset ? 'Edit Asset' : 'Add Asset';
    page.actionBar.title = actionBarTitle;
}