// import { Component } from '@angular/core';
import { MachineryService } from 'src/app/services/machinery.service';
import { formatCurrency } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-own-inventory',
  templateUrl: './own-inventory.component.html',
  styleUrls: ['./own-inventory.component.scss']
})

export class OwnInventoryComponent {

  itemsPerPage = 5
  res: any = []
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1

  constructor(
    private machineryService: MachineryService,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit(): void {
    this.getOwnInventory()
  }


  getOwnInventory() {
    // const idUser = this.get_localstorage();
    const idUser = 34
    console.log("id usuario", idUser)
      this.machineryService.sgetRequestfilter(idUser).subscribe(data => {
        this.res= data
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

  //da formato a precio
  formatCurrencyValue(value: number): string {
    return formatCurrency(value, this.locale, '$', 'COP', '1.3-3');
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

      this.machineryService.getRequest().subscribe(data => {  // tener en cuenta por los paraetro la busqueda 
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
