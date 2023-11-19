import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



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
    private toastr: ToastrService,
    private serviceLogin: LoginService,
    private router: Router

  ) {

    this.formRegiUser = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      user_name: ['', [Validators.required]],
      tipo_documento: ['', [Validators.required]],
      numero_documento: ['', [Validators.required]],
      numero_celular: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      correo_electronico: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      vali_password: ['', [Validators.required]]

    }, {
      validators: this.passwordMatchValidator
    });
    localStorage.removeItem('user');
    
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const valiPasswordControl = formGroup.get('vali_password');

    if (passwordControl && valiPasswordControl) {
      const password = passwordControl.value;
      const valiPassword = valiPasswordControl.value;

      if (password !== valiPassword) {
        valiPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        valiPasswordControl.setErrors(null);
      }
    }
  }


  onSubmit() {
    console.log("ess")
    this.modelUser = new User(
      this.formRegiUser.value.user_name,
      this.formRegiUser.value.password,
      this.formRegiUser.value.nombre,
      this.formRegiUser.value.apellido,
      this.formRegiUser.value.tipo_documento,
      this.formRegiUser.value.numero_documento,
      this.formRegiUser.value.numero_celular,
      this.formRegiUser.value.correo_electronico,
      "C",
      "nofoto1.jpg"
      // "jose1.jpg"
      // "sergio1.jpg"

    );
    this.addUser()
  }

  login(email: string, contrasena: string) {
    /*
        this.serviceUser.getRequest().subscribe(
          res=> {console.log('Re',res) }
          )*/

    // console.log(email + "es"+ contrasena)

    this.serviceLogin.validateUser({
      nombre_user: email,
      contrasena_usuario: contrasena
    }).subscribe(

      (respuesta: any) => {
        console.log(respuesta);
        let user  = respuesta
        this.saveLocalStorage(user);  
         if (respuesta.tipo_usuario === 'A') {
           this.router.navigate(['/home']);
         } else if (respuesta.tipo_usuario === 'C') {
           this.router.navigate(['/dashboard-user']);
         }
      },
      (error) => {
        this.toastr.error(error.error.mensaje);
        // console.error(error.error.mensaje);

      }
    );
  }


  addUser() {
    this.serviceUser.postRequest(this.modelUser).subscribe(
      (respuesta: any) => {
        this.toastr.success(respuesta.mensaje);

      },
      (error) => {
        this.toastr.error(error.error.mensaje);

      }
    );


  }
  
  saveLocalStorage(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  






}


