import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { IAppComponent, TYPE_MODAL } from './IAppComponent';

@Component({
  selector: 'bzg-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements IAppComponent {

  //#region Inputs
  //#region active
  private _active: boolean;

  @Input() set active(val: boolean) {
    this._active = typeof val === 'string' ? (val as string).toLowerCase().includes('true') : val as boolean;
  }

  get active() {
    return this._active;
  }
  //#endregion

  @Input() title: string;
  @Input() acceptText: string;
  @Input() cancelText: string;
  @Input() type = TYPE_MODAL.ACTIONAL;
  @Input() header = true;
  //#endregion

  //#region Events
  @Output() close = new EventEmitter<boolean>();
  @Output() accept = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<boolean>();
  //#endregion

  constructor() { }

  public onClose(): void {
    this.close.emit(true);
    this.active = false;
  }

  onAccept(): void {
    this.accept.emit(true);
  }

  onCancel(): void {
    this.cancel.emit(true);
  }
}
