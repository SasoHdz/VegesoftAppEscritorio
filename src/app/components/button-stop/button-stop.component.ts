import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-stop',
  templateUrl: './button-stop.component.html',
  styleUrls: ['./button-stop.component.scss']
})
export class ButtonStopComponent {
  @Input() texto: string = "Success";

}
