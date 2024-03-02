// import { Component } from '@angular/core';
import { MachineryService } from 'src/app/services/machinery.service';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';
import { formatCurrency } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

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
    private communicationService: CommunicationServiceService,
      @Inject(LOCALE_ID) private locale: string
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

    //da formato a precio
    formatCurrencyValue(value: number): string {
      return formatCurrency(value, this.locale, '$', 'COP', '1.3-3');
    }


  //comunicacion con el padre dasboar_use mediante servicio
  onDetallesClicked(id: number) {
    this.communicationService.enviarDetallesClicked(id);
  }

}
