import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

  res: any = []
  /*
    res: any = [
      {
        nombre_user: "jose.romero104",
        nombre_usuario: "alexander",
        apellido_usuario: "romero",
        tipo_documento: "CC",
        documento_usuario: "1003",
        numero_celu_usuario: "3146582640",
        correo_usuario: "jose.romero050",
        tipo_usuario: "A",
        estado_usuario: "A"
    },
    {
      nombre_user: "jose.romero07",
      nombre_usuario: "alexander",
      apellido_usuario: "romero",
      tipo_documento: "CC",
      documento_usuario: "100345521",
      numero_celu_usuario: "3146582640",
      correo_usuario: "jose.romero07@uptc.edu.co",
      tipo_usuario: "A",
      estado_usuari: "A"
  },
  
  {
    nombre_user: "felipe14",
    nombre_usuario: "alexander",
    apellido_usuario: "romero",
    tipo_documento: "CC",
    documento_usuario: "1003912861",
    numero_celu_usuario: "3146582640",
    correo_usuario: "fogajo9682@ibtrades.com",
    tipo_usuario: "A",
    estado_usuario: "A"
  },
  
  {
    nombre_user: "felipe14fdf",
    nombre_usuario: "alexander",
    apellido_usuario: "romero",
    tipo_documento: "CC",
    documento_usuario: "1003912861554",
    numero_celu_usuario: "3146582640",
    correo_usuario: "fogajo96ffd82@ibtrades.com",
    tipo_usuario: "A",
    estado_usuario: "A"
  },
  
  {
    nombre_user: "felipe1fdsedf",
    nombre_usuario: "alexander",
    apellido_usuario: "romero",
    tipo_documento: "CC",
    documento_usuario: "100391554",
    numero_celu_usuario: "3146582640",
    correo_usuario: "fogajo92@ibtrades.com",
    tipo_usuario: "A",
    estado_usuario: "A"
  },
  
  {
    nombre_user: "felipe1fd5554",
    nombre_usuario: "alexander",
    apellido_usuario: "romero",
    tipo_documento: "CC",
    documento_usuario: "1003915542201",
    numero_celu_usuario: "3146582640",
    correo_usuario: "fogajo955dds2@ibtrades.com",
    tipo_usuario: "A",
    estado_usuario: "A"
  },
  {
    nombre_user: "felipe1fddsd54",
    nombre_usuario: "alexander",
    apellido_usuario: "romero",
    tipo_documento: "CC",
    documento_usuario: "1003952042201",
    numero_celu_usuario: "3146582640",
    correo_usuario: "fogo95fd5dds2@ibtrades.com",
    tipo_usuario: "A",
    estado_usuario: "A"
  }
  
  
    ];*/


  itemsPerPage = 5
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1

  constructor(
    private serviceUser: UsersService,
  ) {

  }

  ngOnInit(): void {

    /////////////////////////////
    //aca se pide los datos
    this.serviceUser.getRequest().subscribe(

      (respuesta: any) => {

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

      this.serviceUser.getRequest().subscribe(data => {
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
