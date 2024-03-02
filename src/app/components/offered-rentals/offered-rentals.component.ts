import { Component } from '@angular/core';
import { ReservesService} from 'src/app/services/reserves.service';

@Component({
  selector: 'app-offered-rentals',
  templateUrl: './offered-rentals.component.html',
  styleUrls: ['./offered-rentals.component.scss']
})
export class OfferedRentalsComponent {
  res: any = []
  itemsPerPage = 5
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1


  constructor( 
    private ReserveService: ReservesService,)
    { }









    enviarDecision(decision: string, idReserva:number,  fechafin :string, idMaquinaria:number ) {
      // console.log('Decisión seleccionada:', decision);
      // console.log('id de reserva:', idReserva);
      // this.idReserva =idReserva
      // this.option = decision
      // this.fechafin=fechafin
      // this.idMaquinaria = idMaquinaria
      // Puedes realizar acciones adicionales con la decisión seleccionada aquí
    }

    //tabla movi
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
  
        this.ReserveService. getRequestfilter(1).subscribe(data => {  // tener en cuenta por los paraetro la busqueda 
          console.log('Data', data);
        });
  
      this.contarPaginas()
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
