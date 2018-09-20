import { EventEmitter } from '@angular/core';

export interface IAppComponent {
    title: string;
    type: TYPE_MODAL;
    acceptText: string;
    cancelText: string;
    active: boolean;
    close: EventEmitter<boolean>;
    onClose: () => void;
}

export enum TYPE_MODAL {
    ACTIONAL = 1,
    NOTIFICATION = 2,
    INPUT = 3
}
