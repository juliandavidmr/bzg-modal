import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'bzg-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {

  private _active: boolean;

  @Input() set active (val: boolean | string) {
    this._active = typeof val === 'string' ? val.toLowerCase().includes('true') : val;
  }

  get active () {
    return this._active;
  }

  @Input() title: string;
  @Input() acceptButtonText: string;

  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.active);
    console.log(this.title);
    console.log(this.acceptButtonText);
  }

  public onClose() {
    this.close.emit(true);
  }
}
