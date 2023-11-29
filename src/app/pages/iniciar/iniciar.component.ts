import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VentaInicio } from 'src/app/Models/VentaInicio';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss'],
})
export class IniciarComponent implements OnInit {
  @ViewChild('miSwal') miSwal!: SwalComponent;
  @ViewChild('swalCambio') swalCambio!: SwalComponent;

  compras: VentaInicio[] = [
    {
      id: '001',
      image: '../../../assets/apple.jpeg',
      producto: 'Manzana',
      precio: 36.5,
      cantidad: 2,
      descripcion: 'Manzanas frescas y deliciosas',
    },
    {
      id: '002',
      image: '../../../assets/banana.jpeg',
      producto: 'Platano',
      precio: 30.5,
      cantidad: 2.4,
      descripcion: 'Plátanos maduros y dulces',
    },
    {
      id: '004',
      image: '../../../assets/pineapple.jpg',
      producto: 'Piñas',
      cantidad: 1.5,
      precio: 25,
      descripcion: 'Piñas dulces de temporada',
    },
    {
      id: '007',
      image: '../../../assets/onion.jpg',
      producto: 'Cebolla',
      cantidad: 1,
      precio: 20,
      descripcion: 'Cebolla blanca de calidad',
    },
    {
      id: '010',
      image: '../../../assets/pear.jpg',
      producto: 'Pera',
      cantidad: 3,
      precio: 25,
      descripcion: 'Pera dulce de temporada',
    },
    {
      id: '011',
      image: '../../../assets/uva.jpg',
      producto: 'Uva',
      cantidad: 1.5,
      precio: 19,
      descripcion: 'Uva sin semilla dulce',
    },
  ];
  venta: VentaInicio[] = [];

  currentState: VentaInicio = {
    id: '000',
    image: '',
    producto: '',
    cantidad: 0,
    precio: 0,
    descripcion: '',
  };

  total: number = 0;
  s1: string = '';
  s2: number = 0;

  ngOnInit() {
    this.startUpdatingState(); // Iniciar la actualización después de que la página se haya cargado
  }

  startUpdatingState() {
    let index = 0; // Variable para llevar el control del índice del array de compras

    // Función que se ejecutará cada 10 segundos
    const updateState = () => {
      // Verificar si el índice está dentro de los límites del array de compras
      if (index < this.compras.length) {
        // Actualizar currentState con los valores del array compras
        this.currentState = { ...this.compras[index] };
        this.venta.push(this.currentState);
        this.total += this.currentState.precio;
        index++; // Mover al siguiente elemento en el siguiente ciclo
      } else {
        stop; // Reiniciar el índice al principio del array si llega al final
      }
    };

    // Ejecutar la función updateState inicialmente y luego cada 10 segundos
    updateState(); // Ejecutar inmediatamente al cargar la página
    setInterval(updateState, 10000); // Ejecutar cada 10 segundos (en milisegundos)
  }

  // ...otros métodos y propiedades

  async abrirAlerta() {
    this.miSwal.swalOptions = {
      title: '$ Cobrar $',
      html: `
      <label>Total:</label>
      <input id="swal-input1" class="swal2-input" value="${
        '$ ' + this.total
      }" disabled="disabled">
      <label>Recibo:</label>
      <input type="number" id="swal-input2" class="swal2-input" min=${this.total} value=${this.total}>
    `,
      focusConfirm: false,
      preConfirm: () => {
        // Obtenemos el valor de swal-input2 cuando se confirma el SweetAlert
        this.s2= parseInt((document.getElementById('swal-input2') as HTMLInputElement).value);
      },
    };

    await this.miSwal.fire().then(()=>{

      this.confirmarVenta()

    });
  }

  async confirmarVenta() {
    this.swalCambio.swalOptions = {
      title: `El cambio es: $ ${this.s2-this.total}`,
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    };

    await this.swalCambio.fire();
  }

  onConfirm(result: any) {
    if (result.isConfirmed) {
      const formValues = [this.s1, this.s2];
      this.mostrarResultados(formValues);
    }
  }

  mostrarResultados(values: any[]) {
    this.miSwal.fire()
  }
}
