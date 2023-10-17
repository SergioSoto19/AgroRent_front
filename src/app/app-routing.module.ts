import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'signIn',component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'listUser',component:UserListComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
