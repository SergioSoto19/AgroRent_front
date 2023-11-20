import { Component } from '@angular/core';
import { MachineryService } from 'src/app/services/machinery.service';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {


  categoriaSeleccionada: string = '';
  res: any = []

  constructor(
    private serviceUser: MachineryService,
    private communicationService: CommunicationServiceService
  ) {

  }

  ngOnInit(): void {
    this.getmachinery()



  }


  getmachinery() {
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

  updateInfoCatalogue() {

    if (this.categoriaSeleccionada === 'todo') {
      this.getmachinery() 
    } else {

      this.serviceUser.sgetRequestfilter(this.categoriaSeleccionada).subscribe(data => {
        this.res = data

        console.log(data)
      }, error => {
        console.error(error.error.mensaje);
      });

    }




  }


  //comunicacion con el padre dasboar_use mediante servicio
  onDetallesClicked(id: number) {
    this.communicationService.enviarDetallesClicked(id);
  }

}
