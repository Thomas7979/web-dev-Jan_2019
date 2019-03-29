import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <fa-other></fa-other>
    <fa-another>
      <div>
         <h2>test ng-content</h2>
         <p>first one</p>
      </div>
    </fa-another>
    <fa-another>
      <h1>style from calling/parent component</h1>
      <p>second ng-content</p>
    </fa-another>

    <br> <br> <hr> <hr>
    <h1>Databinding</h1>
    <fa-databinding></fa-databinding>

    <br> <br> <hr> <hr>
    <h1>Lifecycle</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p>{{textContent}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">Click to delete text above</button>
    <button (click)="textContent = 'changed value'">Click to change Content</button>
    <button (click)="boundValue = 2007">Click to change Binding-Value</button>
   `,

  styles: [`
    h1 {
      color: red;
    }  
  `]
})
export class AppComponent {
  title = 'first-app';
  delete = false;
  textContent = 'Content Text for lifecycle-component';
  boundValue = 1009;
}
