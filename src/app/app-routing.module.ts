import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MachineryListComponent } from './components/machinery-list/machinery-list.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { MachineryRegistrationComponent } from './components/machinery-registration/machinery-registration.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { MachineryInfoComponent } from './components/machinery-info/machinery-info.component';
import { OwnInventoryComponent } from './components/own-inventory/own-inventory.component';
import {OwnMachineryRequestsComponent } from './components/own-machinery-requests/own-machinery-requests.component';
import {OffersOfferedRentalComponent } from './components/offers-offered-rental/offers-offered-rental.component';
import {RentalsRequestComponent} from './components/rentals-request/rentals-request.component';
import {OfferedRentalsComponent} from './components/offered-rentals/offered-rentals.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'user', component: SidebarAdminComponent },
  { path: 'registro-maquinaria', component: MachineryRegistrationComponent },
  { path: 'prueba', component: SidebarAdminComponent },
  { path: 'maquinarias', component: MachineryListComponent },
  { path: 'machinery-info/:id', component: MachineryInfoComponent },

  {
    path: 'dashboard-user'
    , component: DashboardUserComponent,
    children: [
      { path: 'registro-maquinaria', component: MachineryRegistrationComponent },
      { path: 'inventario', component: OwnInventoryComponent},
      { path: 'catalogo', component: CatalogueComponent },
      { path: 'machinery-info/:id', component: MachineryInfoComponent },
      { path: 'MyRequests',component:OwnMachineryRequestsComponent},
      { path: 'MownRentalOffers',component:OffersOfferedRentalComponent},//solicitudes que me llegan 
      { path: 'RentalsRequest',component:RentalsRequestComponent},
      { path: 'OfferedRentals',component:OfferedRentalsComponent},//alquileres que di
    ]
  },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'usuarios', component: UserListComponent },
      { path: 'maquinarias', component: MachineryListComponent },
      { path: 'prueba', component: SidebarAdminComponent },
      // {path:'registro-maquinaria',component:MachineryRegistrationComponent}
    ]
  },


  { path: 'listUser', component: UserListComponent },
  { path: 'maquinaria', component: MachineryListComponent },


  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
