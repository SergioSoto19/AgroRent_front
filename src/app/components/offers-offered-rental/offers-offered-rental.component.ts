// import { Component } from '@angular/core';
import { ReservesService} from 'src/app/services/reserves.service';
import { MachineryService} from 'src/app/services/machinery.service';
import { RentService} from 'src/app/services/rent.service';
import { ToastrService } from 'ngx-toastr';
import { Alquiler} from 'src/app/models/alquiler';
import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-offers-offered-rental',
  templateUrl: './offers-offered-rental.component.html',
  styleUrls: ['./offers-offered-rental.component.scss']
})

export class OffersOfferedRentalComponent {

  @ViewChild('desecisionReser') selectElement: ElementRef | undefined;
  itemsPerPage = 5
  res: any = []
  columna = 'codigo'
  ordenamiento = 'asc'
  busqueda = ''
  totalPaginas = 1
  paginaActual = 1
  reserveOption: string = 'P';
  idReserva: any;
  option: any;
  fechafin:any;
  idMaquinaria:any;
  


  constructor(
    private ReserveService: ReservesService,
    private toastr: ToastrService,
    private machineryService:MachineryService,
    private rentService: RentService

  ) { }

  ngOnInit(): void {
    this.getReserveRequests()
  }

  enviarDecision(decision: string, idReserva:number,  fechafin :string, idMaquinaria:number ) {
    // console.log('Decisión seleccionada:', decision);
    // console.log('id de reserva:', idReserva);
    this.idReserva =idReserva
    this.option = decision
    this.fechafin=fechafin
    this.idMaquinaria = idMaquinaria
    // Puedes realizar acciones adicionales con la decisión seleccionada aquí
  }

  mostrarSeleccionado(decision: string) {
    console.log('Decisión seleccionada:', decision);
    // Puedes realizar acciones adicionales con la decisión seleccionada aquí
  }

  getReserveRequests() {
     const idUser = this.get_localstorage();
      this.ReserveService.getRequestfilterUserAccepted(idUser).subscribe(data => {
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

   // Método para formatear la fecha de  "2023-11-23T09:40"
   formatFechaHora(fechaHora: string): string {
    const fecha = new Date(fechaHora);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();


  
    return `${anio}-${mes}-${dia}`;
  }

  // procseo singrono  async  debido a optener precio 
  async updateReservationStatus( ){
    /*console.log("idrese",this.idReserva)
    console.log("opcion",this.option)
    console.log ("fecha: ",this.fechafin)
    console.log("idemaquina",this.idMaquinaria)*/

    const idReserva = this.idReserva
    const reserveStatus= this.option
    const idMaquinaria =this.idMaquinaria
    const fechafin = this.fechafin

    this.ReserveService.putEstadoRequestfilterUserAccepted(idReserva,reserveStatus).subscribe(data => {
      this.res= data
      this.toastr.success(data.mensaje);
      console.log("estado de actualizaicon ", data)
      this.ngOnInit();
    }, error => {
      // this.toastr.error(error.error.mensaje);
      console.log('ERROR', error);
      this.toastr.error(error.error.mensaje);
    });

    
    if(reserveStatus == "A"){
      const  id_reserva = idReserva
      // const costo_hora_alquiler =  this.getPrecioMachineryById(idMaquinaria)
      const costo_hora_alquiler = await this.getPrecioMachineryById(idMaquinaria);  //singromo 
      const fecha_hora_entrega=fechafin +":00.000Z"
      const costo_total_alquiler = 0
      console.log("el precio es total es", costo_hora_alquiler)


      //CREAMOS ALQUILER 
      const rent  = new Alquiler (idReserva,costo_hora_alquiler,fecha_hora_entrega,0)

      this.rentService.postRequest(rent).subscribe(
        (respuesta: any) => { },
        (error) => {
          if (error.status === 504) {
            this.toastr.error('Tiempo de espera agotado, Servidor no ressponde');
          } else {
            this.toastr.error(error.error.mesanje);
          }
        }
          
      )
      
      



    }


  }

  


  // getPrecioMachineryById(id: number){
  //   let price:number = 0
  //   this.machineryService.sgetRequestfilter(id).subscribe(data => {
  //     price = data[0].precio_hora
  //     const tipoPrecio = typeof data[0].precio_hora;
  //     console.log("El tipo de precio_hora es:", tipoPrecio);
  //     console.log("antes de enviar el precio es :", data[0].precio_hora )
  //     console.log("Despues de enviar el precio es :", price )
  //   }, error => {
  //     console.error(error.error.mensaje);
  //   });
  //   return price
  // }

  
  //procseo singrono  async  debido a optener precio 
  async getPrecioMachineryById(id: number) {
    try {
      const data = await this.machineryService.sgetRequestfilter(id).toPromise();
      const price = data[0].precio_hora;
      const tipoPrecio = typeof price;
      return price;
    } catch (error) {
      return 0; // Devolver un valor predeterminado o manejar el error según sea necesario
    }
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
