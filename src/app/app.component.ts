import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'bz-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {

  @Input() active: boolean = true
  @Input() title: string
  @Input() acceptButtonText: string

  @Output() close = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
    console.log(this.acceptButtonText)
  }

  public onClose() {
    this.close.emit(true)
  }
}
