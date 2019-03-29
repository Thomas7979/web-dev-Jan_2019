import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <span> <=> <span>
    <input type="text" [(ngModel)]="person.name">
  `,

  styles: []
})

export class TwoWayBindingComponent {
  person = {
    name: 'Max',
    age: 37
  };
}
