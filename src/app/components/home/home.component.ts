import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

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
    
  }


}
