import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-inventario',
  templateUrl: './item-inventario.component.html',
  styleUrls: ['./item-inventario.component.scss']
})
export class ItemInventarioComponent {
  @Input() name: string = "Manzana";
  @Input() id: string = "001";
  @Input() cantidad: number = 1;
  @Input() unidad: string = "KG";
  @Input() precio: number = 1;


}
