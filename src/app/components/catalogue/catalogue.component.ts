import { Component } from '@angular/core';
import { MachineryService} from 'src/app/services/machinery.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {

  res: any = []

  constructor(
    private serviceUser: MachineryService,
  ){

  }

  ngOnInit(): void {

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

      console.log(this.res)
    }

}
