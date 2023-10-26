import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() id: string = "001";
  @Input() desc: string = "Aguacate de bola 30$ X 1 kilo";
}
