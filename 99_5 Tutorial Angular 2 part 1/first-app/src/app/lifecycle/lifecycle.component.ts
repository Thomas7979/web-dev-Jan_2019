import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>lifecycle-component with following content from outside:</p>
    <ng-content></ng-content>
    <p>{{bindable}}</p>
  `,

})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input () bindable = 979;

  @ContentChild('boundContent')
  boundContent: HTMLElement;

  constructor() {
  }
  
  ngOnChanges() {
    this.log('Hook ngOnChanges');
  }

  ngOnInit() {
    this.log('Hook ngOnInit');
  }
  
  ngDoCheck() {
    this.log('Hook ngDoCheck');
  }
    
  ngAfterContentInit() {
    this.log('Hook ngAfterContentInit');
    console.log(this.boundContent)
  }
    
  ngAfterContentChecked() {
    this.log('Hook AfterContentChecked');
  }
    
  ngAfterViewInit() {
    this.log('Hook ngAfterViewInit');
  }
    
  ngAfterViewChecked() {
    this.log('Hook ngAfterViewChecked');
  }
      
  ngOnDestroy() {
    this.log('Hook ngOnDestroy');
  }

  private log (WhichHook: string) {
    console.log(WhichHook);
  }
}
