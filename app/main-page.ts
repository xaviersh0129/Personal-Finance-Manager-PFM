import { EventData, Page } from '@nativescript/core';
import { DashboardViewModel } from './view-models/dashboard-view-model';
import { navigateToPage } from './utils/navigation';
import { Logger } from './utils/logger';

const TAG = 'MainPage';
let viewModel: DashboardViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    Logger.debug(TAG, 'Navigating to main page');
    viewModel = new DashboardViewModel();
    page.bindingContext = viewModel;
}

export function onNavigateToIncome(args: EventData) {
    Logger.debug(TAG, 'Navigating to Income list');
    try {
        navigateToPage("views/transactions/transaction-list-page", { filterType: 'income' });
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Income list', error as Error);
    }
}

export function onNavigateToExpense(args: EventData) {
    Logger.debug(TAG, 'Navigating to Expense list');
    try {
        navigateToPage("views/transactions/transaction-list-page", { filterType: 'expense' });
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Expense list', error as Error);
    }
}

export function onNavigateToAssets(args: EventData) {
    Logger.debug(TAG, 'Navigating to Assets list');
    try {
        navigateToPage("views/assets/asset-list-page");
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Assets list', error as Error);
    }
}

export function onNavigateToLiabilities(args: EventData) {
    Logger.debug(TAG, 'Navigating to Liabilities list');
    try {
        navigateToPage("views/liabilities/liability-list-page");
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Liabilities list', error as Error);
    }
}