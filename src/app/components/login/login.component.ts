import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  formRegiUser: FormGroup;
  // modelUser = new User("NOprueba","ApellPrueb","cc","ddd","prueba@","A")
  modelUser: any;



  constructor(
    private serviceUser: UsersService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  
  
  ) {
    this.formRegiUser = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      tipo_documento: ['', [Validators.required]],
      numero_documento: ['', [Validators.required]],
      numero_celular:['', [Validators.required]],
      correo_electronico: ['', [Validators.required, Validators.email]]
    })
  }

  
  onSubmit(){
    this.modelUser = new User(
      this.formRegiUser.value.nombre,
      this.formRegiUser.value.apellido,
      this.formRegiUser.value.tipo_documento,
      this.formRegiUser.value.numero_documento,
      this.formRegiUser.value.estado,
     );
    //  console.log("se carga de datos" , this.modelUser)
     this.addUser()
   }
 

   addUser(){
    this.serviceUser.postRequest(this.modelUser).subscribe(
      
      ( respuesta: any) => {
        this.toastr.success('El Usuario se Registro corrctamente','Registro Correcto');
        console.log(respuesta);
       
      },
      (error) => {
        this.toastr.error('Error al Registrar Usuario','Error de Registro');
        console.error(error);
        
      }
    );


   }






}


