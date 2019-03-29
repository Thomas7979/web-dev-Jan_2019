import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-my-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})

export class MyPropertyBindingComponent {
  @Input() result: number = 0;
}
