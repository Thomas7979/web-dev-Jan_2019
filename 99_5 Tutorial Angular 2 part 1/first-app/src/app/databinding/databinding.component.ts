import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})

export class DatabindingComponent {
  stringInterpolation = 'This is a string interpolation'
  numberInterpolation = 7;

  onTestBorder () {
    return true;
  }

  onClicked (valueReceived: string) {
    alert(valueReceived);
  }
}
