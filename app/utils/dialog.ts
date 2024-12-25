import { Dialogs, DialogOptions } from '@nativescript/core';

export interface ActionDialogOptions {
    title: string;
    message: string;
    actions: Array<{ id: string; text: string }>;
}

export interface ConfirmDialogOptions extends DialogOptions {
    title: string;
    message: string;
    okButtonText?: string;
    cancelButtonText?: string;
}

export function showDialog(options: ActionDialogOptions | ConfirmDialogOptions): Promise<string | boolean> {
    if ('actions' in options) {
        return Dialogs.action({
            title: options.title,
            message: options.message,
            cancelButtonText: 'Cancel',
            actions: options.actions.map(a => a.text)
        }).then(result => {
            if (result === 'Cancel') return 'cancel';
            const action = options.actions.find(a => a.text === result);
            return action ? action.id : 'cancel';
        });
    }
    return Dialogs.confirm(options as DialogOptions);
}