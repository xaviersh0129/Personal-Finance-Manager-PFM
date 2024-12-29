import { Observable } from '@nativescript/core';

export class EventBusService extends Observable {
    private static instance: EventBusService;

    static getInstance(): EventBusService {
        if (!EventBusService.instance) {
            EventBusService.instance = new EventBusService();
        }
        return EventBusService.instance;
    }

    emit(eventName: string, data?: any): void {
        this.notify({ eventName, object: this, data });
    }
}

export const EventNames = {
    SNAPSHOT_UPDATED: 'snapshotUpdated'
} as const;