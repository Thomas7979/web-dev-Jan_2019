import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-myevent-binding',
  template: `
    <button (click)="onMyClicked()">Click my own Event</button>
  `,
  styles: []
})

export class MyeventBindingComponent {
  @Output() myclicked = new EventEmitter<string>();
  onMyClicked () {
    this.myclicked.emit('my own Event works!');
  }
}
