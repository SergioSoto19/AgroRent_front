import { Component } from '@angular/core';
import { MachineryService} from 'src/app/services/machinery.service';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrls: ['./machinery-list.component.scss']
})
export class MachineryListComponent {

  res: any = []

  itemsPerPage = 5
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1

  constructor(
    private serviceUser: MachineryService,
  ){}

  ngOnInit(): void {

  /////////////////////////////
//aca se pide los datos
    this.serviceUser.getRequest().subscribe(

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

    this.serviceUser.getRequest().subscribe( data=> {
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