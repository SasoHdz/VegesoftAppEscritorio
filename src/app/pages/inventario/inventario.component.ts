import { Component } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent {

  word = ""
  productosBase: Producto[] = [
    new Producto("Manzana", "001", "KG", 2.5, 12 , "Manzanas frescas y deliciosas"),
    new Producto("Plátano", "002", "KG", 1.8, 67 ,"Plátanos maduros y dulces"),
    new Producto("Naranja", "003", "KG", 3.0, 29 ,"Naranjas jugosas y llenas de vitamina C"),
    new Producto("Pera", "004", "KG", 2.2, 12 ,"Peras jugosas y sabrosas"),
    new Producto("Zanahoria", "005", "KG", 2.0, 54 ,"Zanahorias frescas y crujientes"),
    new Producto("Pepino", "006", "KG", 1.5, 40 ,"Pepinos verdes y refrescantes"),
    new Producto("Tomate", "007", "KG", 2.8, 25 ,"Tomates rojos y deliciosos"),
    new Producto("Uva", "008", "KG", 3.5, 23 ,"Uvas dulces y jugosas"),
    new Producto("Pimiento", "009", "KG", 2.3, 10 ,"Pimientos frescos y coloridos"),
    new Producto("Sandía", "010", "KG", 4.0, 19 ,"Sandías jugosas y perfectas para el verano"),

  ];

  productos: Producto[] = [...this.productosBase]
  ids: string[] = [...this.productosBase.map(e=>e.id)];


  searchProduct() {
    if (this.word.trim() !== "") {
      this.productos = this.productosBase.filter(producto =>
        producto.desc.toLowerCase().includes(this.word.toLowerCase()) ||
        producto.id.toLowerCase().includes(this.word.toLowerCase())
      );
    } else {
      this.productos = [...this.productosBase];
    }
  }


}
