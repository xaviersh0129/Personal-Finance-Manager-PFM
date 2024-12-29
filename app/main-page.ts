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
    Logger.debug(TAG, 'Attempting to navigate to Income page');
    try {
        navigateToPage("views/transactions/transaction-list-page", { filterType: 'income' });
        Logger.debug(TAG, 'Successfully navigated to Income page');
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Income page', error as Error);
    }
}

export function onNavigateToExpense(args: EventData) {
    Logger.debug(TAG, 'Attempting to navigate to Expense page');
    try {
        navigateToPage("views/transactions/transaction-list-page", { filterType: 'expense' });
        Logger.debug(TAG, 'Successfully navigated to Expense page');
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Expense page', error as Error);
    }
}

export function onNavigateToAssets(args: EventData) {
    Logger.debug(TAG, 'Attempting to navigate to Assets page');
    try {
        navigateToPage("views/assets/asset-list-page");
        Logger.debug(TAG, 'Successfully navigated to Assets page');
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Assets page', error as Error);
    }
}

export function onNavigateToLiabilities(args: EventData) {
    Logger.debug(TAG, 'Attempting to navigate to Liabilities page');
    try {
        navigateToPage("views/liabilities/liability-list-page");
        Logger.debug(TAG, 'Successfully navigated to Liabilities page');
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Liabilities page', error as Error);
    }
}

export function onNavigateToMonthlySnapshot(args: EventData) {
    Logger.debug(TAG, 'Attempting to navigate to Monthly Snapshot page');
    try {
        navigateToPage("views/monthly-snapshot/monthly-snapshot-page");
        Logger.debug(TAG, 'Successfully navigated to Monthly Snapshot page');
    } catch (error) {
        Logger.error(TAG, 'Failed to navigate to Monthly Snapshot page', error as Error);
    }
}