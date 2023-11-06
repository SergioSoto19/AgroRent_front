import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './components/user-list/user-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MachineryListComponent } from './components/machinery-list/machinery-list.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { MachineryRegistrationComponent } from './components/machinery-registration/machinery-registration.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { MachineryInfoComponent } from './components/machinery-info/machinery-info.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignInComponent,
    UserListComponent,
    MachineryListComponent,
    SidebarAdminComponent,
    MachineryRegistrationComponent,
    DashboardUserComponent,
    CatalogueComponent,
    MachineryInfoComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({}),
    FullCalendarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
