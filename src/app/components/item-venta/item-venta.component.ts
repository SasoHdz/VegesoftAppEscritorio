import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-venta',
  templateUrl: './item-venta.component.html',
  styleUrls: ['./item-venta.component.scss']
})
export class ItemVentaComponent {
  @Input() name: string = "Manzana";
  @Input() id: string = "001";
  @Input() cantidad: number = 1;


}
