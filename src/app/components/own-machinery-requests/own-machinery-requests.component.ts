import { Component } from '@angular/core';
import { ReservesService} from 'src/app/services/reserves.service';


@Component({
  selector: 'app-own-machinery-requests',
  templateUrl: './own-machinery-requests.component.html',
  styleUrls: ['./own-machinery-requests.component.scss']
})
export class OwnMachineryRequestsComponent {

  itemsPerPage = 5
  res: any = []
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1



  constructor(
    private ReserveService: ReservesService,

  ) { }

  ngOnInit(): void {
    this.getReserveRequests()
  }


  getReserveRequests() {
    const idUser = this.get_localstorage();
    // const idUser = 34
   // console.log("id usuario", idUser)
      this.ReserveService.getRequestfilterUser(idUser).subscribe(data => {
         this.res= data
        console.log("reservas solicitude ", data)
      }, error => {
        // this.toastr.error(error.error.mensaje);
        console.log('ERROR', error);
      });
  }

  

  get_localstorage() {
    let userId = 0
    const usuarioString = localStorage.getItem('user');
    if (usuarioString !== null) {
      const user = JSON.parse(usuarioString);
      userId = user.id_usuario
    }
    return userId
  }

   // Método para formatear la fecha de  "2023-11-23T09:40"
   formatFechaHora(fechaHora: string): string {
    const fecha = new Date(fechaHora);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
  
    return `${anio}-${mes}-${dia}`;
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
