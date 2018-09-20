import { EventEmitter } from '@angular/core';

export interface IAppComponent {
    // Inputs
    title: string;
    type: TYPE_MODAL;
    acceptText: string;
    cancelText: string;
    active: boolean;
    header: boolean;

    // Events
    close: EventEmitter<boolean>;
    accept: EventEmitter<boolean>;
    cancel: EventEmitter<boolean>;
    onClose: () => void;
    onAccept: () => void;
    onCancel: () => void;
}

export enum TYPE_MODAL {
    ACTIONAL = 1,
    NOTIFICATION = 2,
    INPUT = 3
}
