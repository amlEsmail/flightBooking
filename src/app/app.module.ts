import { ReservationService } from './reservation/reservation.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2CompleterModule} from 'ng2-completer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './auth/home.component';
import { FlightDetailsComponent } from './reservation/flight-details/flight-details.component';
import { PassengersDetailsComponent } from './reservation/passengers-details/passengers-details.component';
import { SummaryComponent } from './reservation/summary/summary.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ReservationComponent,
    HomeComponent,
    FlightDetailsComponent,
    PassengersDetailsComponent,
    SummaryComponent,
    ContactComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CompleterModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
