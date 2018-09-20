import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { IAppComponent, TYPE_MODAL } from './IAppComponent';

@Component({
  selector: 'bzg-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit, IAppComponent {

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
  //#endregion

  //#region Events
  @Output() close = new EventEmitter<boolean>();
  //#endregion

  constructor() { }

  ngOnInit(): void {
    console.log(this.active);
    console.log(this.title);
    console.log(this.acceptText);
    console.log(this.cancelText);
  }

  public onClose(): void {
    this.close.emit(true);
  }
}
