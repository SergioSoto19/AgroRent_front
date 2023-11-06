import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineryService} from 'src/app/services/machinery.service';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-machinery-info',
  templateUrl: './machinery-info.component.html',
  styleUrls: ['./machinery-info.component.scss']
})
export class MachineryInfoComponent {
  // id: string | null ;

  // maquinaria: any; //  detalles de la maquinaria

  maquinaria =  {
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

  constructor(
    private route: ActivatedRoute,
    private machineryService: MachineryService
  ) {
    // this.id = this.route.snapshot.paramMap.get('id')
    // console.log("e id:" + this.id)

  }

  ngOnInit(): void {
 

    this.route.params.subscribe((params) => {

      const maquinariaId = params['id']; // se Obtiene el 'id' de los parámetros de la URL
      
      /**this.machineryService.getMaquinariaById(maquinariaId).subscribe((data) => {
        this.maquinaria = data;
      })
      ;*/
      console.log("es id:" + maquinariaId)
    });
  }

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

}

