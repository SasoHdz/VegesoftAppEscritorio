import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-form',
  templateUrl: './campo-form.component.html',
  styleUrls: ['./campo-form.component.scss']
})
export class CampoFormComponent {
  @Input() nameId: string = " nombre";
  @Input() name: string = "Nombre";

}
