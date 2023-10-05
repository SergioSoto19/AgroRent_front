import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  fmRcurso: FormGroup;



  constructor(
 
    private formBuilder: FormBuilder,
  
  
  ) {

    this.fmRcurso = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      tipo_documento: ['', [Validators.required]],
      numero_documento: ['', [Validators.required]],
      numero_celular:['', [Validators.required]],
      correo_electronico: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]]
    })
  }


}


