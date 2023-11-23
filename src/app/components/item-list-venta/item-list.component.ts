import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-venta',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent2 {
  @Input() hora: string = "12:00";
  @Input() cantidad: number = 0;
  @Input() producto: string = "Lechuga";
  @Input() cajero: string = "Emmanuel";
  @Input() total: number = 1200;
}
