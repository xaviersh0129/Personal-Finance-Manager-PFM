import { Frame } from '@nativescript/core';

export function navigateToPage(pagePath: string, context?: any): void {
    Frame.topmost().navigate({
        moduleName: pagePath,
        context: context,
        clearHistory: false
    });
}