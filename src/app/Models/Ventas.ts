export class Ventas {
    hora: string = ""
    cantidad: number = 0
    producto: string =""
    cajero: string = ""
    total: number = 0

    constructor(hora: string, cantidad: number, producto: string, cajero: string, total: number) {
      this.hora = hora;
      this.cantidad = cantidad;
      this.producto = producto;
      this.cajero = cajero;
      this.total = total;
    }

    // Función para validar atributos no vacíos
    validarAtributos(): boolean {
    return (
      this.hora.trim() !== '' &&
      this.cantidad !== 0 &&
      this.producto.trim() !== '' &&
      this.cajero.trim() !== '' &&
      this.total !== 0
    );
  }
}
