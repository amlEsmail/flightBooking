import { Flight } from './../flight.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservationService } from '../reservation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  selectedCity="";
  cities:any[]=[
    {city:"Choose city ",value:""},
    {city:"Cairo",value:"Cairo"},
    {city:"China",value:"China"},
    {city:"Saudi Arabia",value:"Saudi Arabia"},
    {city:"kuwait",value:"kuwait"},
    {city:"Algeria",value:"Algeria"},
    {city:"Bahrain",value:"Bahrain"},

  ];
  defaultValue="";

  constructor(private reservService:ReservationService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
  }

//   onSelectCity(cityValue)
//   {
// console.log(cityValue);
// this.selectedCity=cityValue;

//   }

  onSubmitFlight(flightForm:NgForm)
  {
    console.log(this.selectedCity);
    const departure=flightForm.value.depature;
    console.log(departure);
    const arrival=flightForm.value.arrival;
    const passNo=flightForm.value.passNo;
    const newFlight=new Flight(departure,arrival,passNo);
    this.reservService.setFlight(newFlight);
    this.router.navigate([passNo,"passengers"],{relativeTo:this.route});
  





  }

}
