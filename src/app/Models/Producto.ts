export class Producto {
    name: string = ""
    unidad: string ="kg"
    precioU: number = 0
    descripcion: string = ""
    desc: string = ""

    constructor(name:string, unidad:string, precioU:number, descripcion:string){
      this.desc = `${this.name}. ${this.descripcion}. ${this.unidad}X${this.unidad}`;
    }
}
