import { Component } from '@angular/core';
import { h } from '@fullcalendar/core/preact';
import { ReservesService} from 'src/app/services/reserves.service';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.scss']
})
export class ReserveListComponent {
  res: any = []

  itemsPerPage = 6
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1

  constructor(
    private serviceUser: ReservesService,
  ){}

  ngOnInit(): void {

  /////////////////////////////
//aca se pide los datos
    this.serviceUser.getReserves().subscribe(

      ( respuesta: any) => {
        console.log(respuesta);
        this.res = respuesta
      },
      (error) => {
       // this.toastr.error(error.error.mensaje);
        console.error(error.error.mensaje);
      }
    );

    
  }





  cambiarPaginacion(key: string, event: any) {
    if (key == 'mostrar')
      this.itemsPerPage = Number(event)

    if (key == 'columna')
      this.columna = event

    if (key == 'ordenamiento') {
      this.ordenamiento = event
      if (this.ordenamiento == 'Ascendente')
        this.ordenamiento = 'asc'
      else
        this.ordenamiento = 'desc'
    }

    if (key == 'busqueda')
      this.busqueda = event

    console.log("columna es:", this.columna, "ordenamiento es:", this.ordenamiento, "busqueda es ", this.busqueda),

    this.serviceUser.getReserves().subscribe( data=> {
      console.log('Data', data);
    });

    this.contarPaginas()
  }

  formatFechaHora(fechaHora: string): Array<String> {
    const fecha = new Date(fechaHora);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    
    // Obtén la hora y los minutos en formato de 12 horas
    const hora12 = fecha.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  
    return [`${anio}-${mes}-${dia}`,`${hora12}` ];
  }

 
  contarPaginas() {
    this.totalPaginas = 0
    this.paginaActual = 1
    for (let index = 0, c = 0; index < this.res.length; index++, c++) {
      const element = this.res[index];
      if (this.res.length <= this.itemsPerPage) {
        this.totalPaginas = 1
        break
      }
      else
        if (c == this.itemsPerPage) {
          this.totalPaginas++
          c = 0
        }

      if (index == this.res.length - 1) {
        this.totalPaginas++
      }

    }

}
}