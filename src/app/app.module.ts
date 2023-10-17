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

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignInComponent,
    UserListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({})
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
