import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-success',
  templateUrl: './button-success.component.html',
  styleUrls: ['./button-success.component.scss']
})
export class ButtonSuccessComponent {
  @Input() texto: string = "Success";

}
