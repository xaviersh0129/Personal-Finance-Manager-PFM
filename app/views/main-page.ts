import { EventData, Page } from '@nativescript/core';
import { DashboardViewModel } from '../view-models/dashboard-view-model';
import { Logger } from '../utils/logger';

const TAG = 'MainPage';

export function navigatingTo(args: EventData) {
    try {
        Logger.debug(TAG, 'Navigating to main page');
        const page = <Page>args.object;
        page.bindingContext = new DashboardViewModel();
    } catch (error) {
        Logger.error(TAG, 'Error in navigatingTo', error as Error);
    }
}