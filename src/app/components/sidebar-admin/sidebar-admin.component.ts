import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { machinery } from 'src/app/models/machinery';
import { MachineryService } from 'src/app/services/machinery.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})



export class SidebarAdminComponent {

  formRegiMachy: FormGroup;
  model_machinery: any;

  constructor(
    private serviceUser: MachineryService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,


  ) {
    this.formRegiMachy = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
     /* apellido: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      user_name: ['', [Validators.required]],
      tipo_documento: ['', [Validators.required]],
      numero_documento: ['', [Validators.required]],
      numero_celular: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      correo_electronico: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      vali_password: ['', [Validators.required]]*/
    });
  }



  onSubmit() {
    this.model_machinery = new machinery(
    "1003912",
      this.formRegiMachy.value.nombre,
      this.formRegiMachy.value.password,
     "jjjj",
      this.formRegiMachy.value.apellido,
      this.formRegiMachy.value.tipo_documento,
    );
    this.addUser()
  }


  addUser() {
    console.log(this.model_machinery)
    this.serviceUser.postRequest(this.model_machinery).subscribe(
      (respuesta: any) => {
        this.toastr.success(respuesta.mensaje);

      },
      (error) => {
        this.toastr.error(error.error.mensaje);

      }
    );

  }
}