import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  productos: any[] = [
    {id: "0003", desc: "Cebolla Blanca 13$ X 1 Kilo"},
    {id: "0004", desc: "Naranja  18$ X 1 Kilo"},
    {id: "0005", desc: "Calabaza Bola 19.4$ X 1 Kilo"},
    {id: "0006", desc: "Uva sin semilla 17.5$ X 1 Kilo"},
    {id: "0003", desc: "Cebolla Blanca 13$ X 1 Kilo"},
    {id: "0004", desc: "Naranja  18$ X 1 Kilo"},
    {id: "0005", desc: "Calabaza Bola 19.4$ X 1 Kilo"},
    {id: "0006", desc: "Uva sin semilla 17.5$ X 1 Kilo"},

  ]
}
