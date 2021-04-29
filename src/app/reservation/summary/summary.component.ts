import { Passenger } from './../passenger.model';
import { Flight } from './../flight.model';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
flightInfo:Flight;
passengersInfo:Passenger[];
  constructor(private reservService:ReservationService) { }

  ngOnInit() {
    this.flightInfo=this.reservService.getFlight();
    this.passengersInfo=this.reservService.getPassenger();
  }

}
