import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {UserListComponent } from './components/user-list/user-list.component';
import {MachineryListComponent} from './components/machinery-list/machinery-list.component';
import {SidebarAdminComponent} from './components/sidebar-admin/sidebar-admin.component';
import {MachineryRegistrationComponent} from './components/machinery-registration/machinery-registration.component';
import {DashboardUserComponent} from './components/dashboard-user/dashboard-user.component';
import {CatalogueComponent} from './components/catalogue/catalogue.component';
import {MachineryInfoComponent} from './components/machinery-info/machinery-info.component';



const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'signIn',component:SignInComponent},
  {path:'user',component:SidebarAdminComponent},
  {path:'registro-maquinaria',component:MachineryRegistrationComponent},
  {path:'prueba',component:SidebarAdminComponent},
  {path:'catalogo',component:CatalogueComponent},
  {path:'machinery-info/:id',component:MachineryInfoComponent},
  {path:'maquinarias',component:MachineryListComponent},


  {path:'dashboard-user'
  ,component:DashboardUserComponent,
  children:[
    {path:'catalogoo',component:CatalogueComponent},
    {path:'machinery-info/:id',component:MachineryInfoComponent},
    {path:'registro-maquinaria',component:MachineryRegistrationComponent},
    {path:'inventario',component:MachineryListComponent},

  ]

},


  {path:'home',component:HomeComponent,
  children:[
    {path:'usuarios',component:UserListComponent},
    {path:'maquinarias',component:MachineryListComponent},
    {path:'prueba',component:SidebarAdminComponent},
    // {path:'registro-maquinaria',component:MachineryRegistrationComponent}

   
  ]

},


  {path:'listUser',component:UserListComponent},
  {path:'maquinaria',component:MachineryListComponent},
  

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
