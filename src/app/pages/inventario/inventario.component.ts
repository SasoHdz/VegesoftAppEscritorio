import { Component, ViewChild } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent {
  @ViewChild('reporte') miSwal!: SwalComponent;

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

  generatePDF() {
    const doc = new jsPDF();

    // Encabezado
    doc.text('Reporte de Ventas - Vegesoft', 70, 10);


    // Contenido
    this.productos.forEach((venta, index) => {
      const yPos = 20 + index * 10;
      doc.text(`Producto: ${venta.name}, Total: ${venta.cantidad} ${venta.precioU}`, 20, yPos);
    });

    // Guardar o mostrar el PDF
    doc.save('inventario-vegesoft.pdf');
  }


  async abrirAlerta() {
    this.miSwal.swalOptions ={
      position: "top-end",
      icon: "success",
      title: "Reporte generado",
      showConfirmButton: false,
      timer: 1500
    };

    await this.miSwal.fire().then((result) => {
      this.generatePDF()
    });
  }


}
