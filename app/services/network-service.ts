import { Connectivity } from '@nativescript/core';
import { Logger } from '../utils/logger';

const TAG = 'NetworkService';

export class NetworkService {
    private static instance: NetworkService;

    static getInstance(): NetworkService {
        if (!NetworkService.instance) {
            NetworkService.instance = new NetworkService();
        }
        return NetworkService.instance;
    }

    async isConnected(): Promise<boolean> {
        try {
            const connectionType = Connectivity.getConnectionType();
            return connectionType !== Connectivity.connectionType.none;
        } catch (error) {
            Logger.error(TAG, 'Error checking network connection', error as Error);
            return false;
        }
    }
}