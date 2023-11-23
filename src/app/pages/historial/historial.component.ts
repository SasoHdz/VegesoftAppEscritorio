import { Component } from '@angular/core';
import { Ventas } from 'src/app/Models/Ventas';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  newVentas: Ventas = new Ventas("",0,"","",0);
  validarForm: boolean = true;

  totalVentas: number = 0;

  word = ""
  Ventasproductos: Ventas[] = [
    new Ventas("12:00", 10, "Manzanas", "Emmanuel", 255),
    new Ventas("12:30", 50, "Fresas", "Emmanuel", 1050),
    new Ventas("13:00", 15, "Uvas", "Emmanuel", 340),
    new Ventas("13:50", 20, "Manzanas", "Emmanuel", 510),
    new Ventas("14:00", 5, "Tamarindo", "Emmanuel", 100),
    new Ventas("14:34", 30, "Cacahuate", "Emmanuel", 550),
    new Ventas("15:00", 10, "Manzanas", "Emmanuel", 255),
    new Ventas("15:30", 10, "Cebolla blanca", "Isaac", 230),
  ];

  venta: Ventas[] = [...this.Ventasproductos]

  searchVenta() {
    if (this.word.trim() !== "") {
      this.venta = this.Ventasproductos.filter(venta =>
        venta.producto.toLowerCase().includes(this.word.toLowerCase())
      );
    } else {
      this.venta= [...this.Ventasproductos];
    }

    this.totalVentas = this.venta.reduce((total, venta) => total + venta.total, 0);
  }

  generatePDF() {
    const doc = new jsPDF();
  
    // Encabezado
    doc.text('Reporte de Ventas - Vegesoft', 70, 10);
    
  
    // Contenido
    this.venta.forEach((venta, index) => {
      const yPos = 20 + index * 10;
      doc.text(`Producto: ${venta.producto}, Total: ${venta.total}`, 20, yPos);
    });
  
    // Guardar o mostrar el PDF
    doc.save('reporte_ventas.pdf');
  }
  
}
