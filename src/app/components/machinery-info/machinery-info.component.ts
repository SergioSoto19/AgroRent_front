// import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineryService } from 'src/app/services/machinery.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoUserSessionService  } from 'src/app/services/info-user-session.service';
import { ReservesService  } from 'src/app/services/reserves.service';
import { Reserve } from 'src/app/models/reserve';
import { ToastrService } from 'ngx-toastr';
// import { CalendarOptions, EventApi, Calendar } from '@fullcalendar/core';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-machinery-info',
  templateUrl: './machinery-info.component.html',
  styleUrls: ['./machinery-info.component.scss']
})
export class MachineryInfoComponent {

  @ViewChild(FullCalendarComponent) fullCalendar!: FullCalendarComponent;


  // maquinaria = {
  //   "id_maquinaria": 2,
  //   "id_usuario": 18,
  //   "nombre_maquina": "tractor8",
  //   "descripcion_maquina": "para lssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
  //   "placa_maquina": "o",
  //   "modelo_maquina": "",
  //   "estado_maquina": "a",
  //   "precio_hora": 600000,

  //   "path": [
  //     "/assets/image/maquinaria.jpg",
  //     "/assets/image/login.jpg",
  //     "/assets/image/welcom.jpg"
  //   ]
  // }

  maquinaria :any= {}


  formCalendar: FormGroup;
  private maquinariaId: number = 0;
  
  events: any = []

  /*events: any = [
    { title: 'reservado', start: '2023-12-21', end: '2023-12-25' }, //color:'#0000ff' 
    { title: 'reservado', start: '2023-11-21', end: '2023-11-25' }
  ]*/

  /*events: any = [
    { title: 'reservado', start: '2023-11-23', end: '2023-11-27' }, //color:'#0000ff' 
  ]*/

  



  constructor(
    private route: ActivatedRoute,
    private machineryService: MachineryService,
    private formBuilder: FormBuilder,
    private serviceInfoSessionUser: InfoUserSessionService,
    private serviceReserver: ReservesService,
    private toastr: ToastrService,
  ) {
    this.formCalendar =this.createForm();
  }

  ngOnInit(): void {
    this.getidachinery()
    this.getInfoMachinery()
    this.getInforeserveMachuinary()
  }



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
     events: this.events
  };

  getidachinery(){
    this.route.params.subscribe((params) => {
      this.maquinariaId = +params['id']; // se Obtiene el 'id' de la maquinaria desde  los parámetros de la URL
    });
  }

  getInfoMachinery(){
    this.machineryService.sgetRequestfilter(this.maquinariaId).subscribe(data => {
      this.maquinaria = data[0]
    }, error => {
      console.log('ERROR', error);
    });
  }

  //trae info de reservas
  getInforeserveMachuinary(){
    this.serviceReserver.getRequestfilter(this.maquinariaId).subscribe(data => {
    //  console.log('fecha sin formato', data);
      const reservasAceptadas = data.filter((reserva: { validacion_reserva: string }) => reserva.validacion_reserva === 'A');
      // console.log('Reservas Aceptadas', reservasAceptadas);


        // Transformar los datos a la forma  de solo fecha de inicio y fin 
        const eventos: any[] = reservasAceptadas.map((item: any) => ({
          fecha_hra_inicio: item.fecha_hra_inicio,
          facha_hora_fin: item.facha_hora_fin
        }));
        
         //reservas  formateada solo fechas
        // console.log("fechas formateadas")

         this.mostrareventosnuevos(eventos); // para cargar directamente las fechas creadas

    }, error => {
      console.log('ERROR', error);
    });

}


/*Función para transformar el array de reservas del formato  [{fecha_inicio,fecha_fin}] 
a formato [{title,start,end},]original en un nuevo formato
*/
 convertirAEventos(reservas: any[]): any[] {
  return reservas.map(reserva => ({
    title: 'reservado',
    start: reserva.fecha_hra_inicio,
    end: reserva.facha_hora_fin
  }));
}

mostrareventosnuevos(eventos: any[]){
  console.log("solo fechas ", eventos)
  this.calendarOptions.events = this.convertirAEventos(eventos);  // se envia directamente los eventos al fulcalendar
    // console.log("evento snuevos: ",this.events);
}



  createForm() {
    return this.formBuilder.group({
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      // departamento:['',Validators.required],
      // municipio:['',Validators.required]

    })
  }

  enviarformlario() {

     console.log(
      // this.formCalendar.value.departamento,
      // this.formCalendar.value.municipio,

      this. get_localstorage(),
      this.maquinariaId,
      this.formCalendar.value.start_date,
      this.formCalendar.value.end_date,
      "P"
      );
      console.log("se recivio ")
      // console.log(this.serviceInfoSessionUser.getInfoUserSesion())
      
      this.addReserve()
  }


  get_localstorage(){
    let userId = 0
    const usuarioString = localStorage.getItem('user');
    if (usuarioString !== null) {
      const user = JSON.parse(usuarioString);
      userId = user.id_usuario
    }
    return userId
  }

  addReserve(){
    const reservation_request = this.createReserve()

    this.serviceReserver.postRequest(reservation_request).subscribe(
      (respuesta: any) => {
        this.toastr.success(respuesta.mensaje); //se añadio reserva o fecha no disponible 

      // Actualiza los eventos directamente en FullCalendar
        // this.getInforeserveMachuinary() //obtengo las nueveas reservas 
       
        // const calendarApi = this.fullCalendar.getApi();
        // calendarApi.removeAllEvents(); // Elimina todos los eventos
        // calendarApi.addEventSource(this.events); // Agrega nuevamente los eventos
        
 

      },
      (error) => {
        this.toastr.error(error.error.mensaje);
      }
    );
  }

  createReserve(){
     return  new Reserve(
      this. get_localstorage(),
      this.maquinariaId,
      this.formCalendar.value.start_date,
      this.formCalendar.value.end_date,
      "P"
    )
  }

 


}

