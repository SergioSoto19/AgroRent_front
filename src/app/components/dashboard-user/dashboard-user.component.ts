import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { InfoUserSessionService  } from 'src/app/services/info-user-session.service';
import {CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {


   private user: any;

  constructor(
    private serviceInfoSessionUser: InfoUserSessionService,
    private communicationService: CommunicationServiceService
  ){

  }

  ngOnInit(): void {
    const sidebarToggle = document.getElementById("menu-lateral-aparicion");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        console.log("Se hizo clic en el botón.");
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
          sidebar.classList.toggle("collapsed");
        }
      });
    }
    this.get_localstorage() 
    
    console.log ("indo de usuario: ", this.user)

    console.log("entra")

    this.communicationService.detallesClicked$.subscribe((id) => {
      // Realiza las acciones necesarias con el ID recibido, por ejemplo, cargar machinery-info/:id
      /* console.log(`Se hizo clic en Detalles. ID: ${id}`);
        console.log('MachineryInfoComponent cargado.');*/
    });
   

  }

  enviarInfoUser(){
    console.log("se envio");
    this.serviceInfoSessionUser.setinfo(this.user)
  }


  Sign_off(){
   console.log("salir")
   localStorage.removeItem('user');
    
   
  }

  get_localstorage(){
    const usuarioString = localStorage.getItem('user');
    if (usuarioString !== null) {
      this.user = JSON.parse(usuarioString);
    }
  }
 

  getUser(){
    return this.user
  }




}
