import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { machinery } from 'src/app/models/machinery';
import { MachineryService } from 'src/app/services/machinery.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-machinery-registration',
  templateUrl: './machinery-registration.component.html',
  styleUrls: ['./machinery-registration.component.scss']
})



export class MachineryRegistrationComponent {

  formRegiMachy: FormGroup;
  model_machinery: any;
  fileSelected: any;
  files: File[] = [];
  imagenSeleccionada = false
  modelo = "v";
  placa = "v";

  constructor(
    private serviceUser: MachineryService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,


  ) {
    this.formRegiMachy = this.formBuilder.group({
      nombreMaquina: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      // placa: ['', [Validators.required]],
      // modelo:['', [Validators.required]],
      //
      precio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]


    });
  }



  onSubmit() {

    const paths: string[] = this.addimagenes();

    if (this.formRegiMachy.value.placa) {
      this.placa = this.formRegiMachy.value.placa;
    }
    if (this.formRegiMachy.value.moldeo) {
      this.modelo = this.formRegiMachy.value.moldeo;
    }

    this.model_machinery=new machinery(
      "10023641",
      this.formRegiMachy.value.nombreMaquina,
      this.formRegiMachy.value.descripcion,
      this.formRegiMachy.value.categoria,
      this.placa,
      this.modelo,
      this.formRegiMachy.value.precio,
      paths
    );
    
    this.addUser()
  }


  addUser() {
    // console.log(this.model_machinery)
    
    this.serviceUser.postRequest(this.model_machinery).subscribe(
      (respuesta: any) => {
        this.toastr.success(respuesta.mensaje);

      },
      (error) => {
        this.toastr.error(error.error.mensaje);

      }
    )

  }


  onSelect(event: any) {
    /*const file = event.addedFiles[0];
    this.fileSelected = file;

    if (this.files.length > 0) {
      this.files.splice(0, 1);
    }
    this.files.push(file);
    this.imagenSeleccionada = true*/

    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1)
  }

  addMachinery() {
    const nombres = this.addimagenes();
    console.log(nombres);
  }


  addimagenes(): string[] {
    console.log("rutas de los archivos")

    if (!this.files[0]) {
      alert("no hay archivos subidos")
      return [];
    } else {
      const nombresDeArchivos = this.files.map((file) => file.name);
      return nombresDeArchivos;
    }

  }

}
