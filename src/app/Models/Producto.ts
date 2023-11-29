export class Producto {
    name: string = ""
    id: string = ""
    unidad: string ="kg"
    precioU: number = 0
    descripcion: string = ""
    desc: string = ""
    cantidad: number = 10

    constructor(name: string, id: string, unidad: string, precioU: number,cantidad:number ,descripcion: string) {
      this.name = name;
      this.id = id;
      this.unidad = unidad;
      this.precioU = precioU;
      this.descripcion = descripcion;
      this.cantidad = cantidad
      this.desc = `${this.name}. ${this.descripcion}. ${this.precioU}$ X ${this.unidad}`;
    }

    generateDesc(){
      this.desc = `${this.name}. ${this.descripcion}. ${this.precioU}$ X ${this.unidad}`;
    }

    // Función para validar atributos no vacíos
    validarAtributos(): boolean {
    return (
      this.name.trim() !== '' &&
      this.id.trim() !== '' &&
      this.unidad.trim() !== '' &&
      this.precioU !== 0 &&
      this.descripcion.trim() !== ''
    );
  }
}
