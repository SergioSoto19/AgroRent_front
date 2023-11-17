import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {


   private user: any;

  constructor(){

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
