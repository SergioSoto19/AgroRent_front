import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {






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
