import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineryService } from 'src/app/services/machinery.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-machinery-info',
  templateUrl: './machinery-info.component.html',
  styleUrls: ['./machinery-info.component.scss']
})
export class MachineryInfoComponent {

  maquinaria = {
    "id_maquinaria": 2,
    "id_usuario": 18,
    "nombre_maquina": "tractor8",
    "descripcion_maquina": "para lssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    "placa_maquina": "o",
    "modelo_maquina": "",
    "estado_maquina": "a",
    "precio_hora": 500000,

    "path": [
      "/assets/image/maquinaria.jpg",
      "/assets/image/login.jpg",
      "/assets/image/welcom.jpg"
    ]
  }

    formCalendar: FormGroup;

  events: any = [
    { title: 'event 1', date: '2023-11-18' }, //color:'#0000ff' 
    { title: 'event 2', date: '2023-11-19' }
  ]



  constructor(
    private route: ActivatedRoute,
    private machineryService: MachineryService,
    private formBuilder: FormBuilder,
  ) {
    this.formCalendar =this.createForm();
  }

  ngOnInit(): void {


    this.route.params.subscribe((params) => {

      const maquinariaId = params['id']; // se Obtiene el 'id' de los parámetros de la URL
      console.log("el parametro id es :" + maquinariaId)
    });
  }

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events
  };


  createForm() {
    return this.formBuilder.group({
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      departamento:['',Validators.required],
      municipio:['',Validators.required]

    })
  }

  enviarformlario() {
    console.log(
      this.formCalendar.value.departamento,
      this.formCalendar.value.municipio,
      this.formCalendar.value.start_date,
       this.formCalendar.value.end_date,
      );

   


  }


}

