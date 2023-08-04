import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-ripple',
  templateUrl: './button-ripple.component.html',
  styleUrls: ['./button-ripple.component.scss']
})
export class ButtonRippleComponent {
  @Input()
  text: string = "";
}
