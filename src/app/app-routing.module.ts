import { ContactComponent } from './contact/contact.component';
import { PassengersDetailsComponent } from './reservation/passengers-details/passengers-details.component';
import { FlightDetailsComponent } from './reservation/flight-details/flight-details.component';
import { AuthGuard } from './auth/auth-guard.service';

import { HomeComponent } from './auth/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SummaryComponent } from './reservation/summary/summary.component';

const routes: Routes = [
  {path:"",component:HomeComponent ,children:[
    {path:"",component:LoginComponent },
    {path:"register",component:RegisterComponent},
  ]},

  {path:"reservation",component:ReservationComponent,canActivate:[AuthGuard],
  children:[
    {path:"",component:FlightDetailsComponent},
    {path:"summary",component:SummaryComponent},
    {path:":id/passengers",component:PassengersDetailsComponent},

    
  ]},
  {path:"contact",component:ContactComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
