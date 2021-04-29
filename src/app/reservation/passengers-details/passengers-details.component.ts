import { Passenger } from './../passenger.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-passengers-details',
  templateUrl: './passengers-details.component.html',
  styleUrls: ['./passengers-details.component.css']
})
export class PassengersDetailsComponent implements OnInit {
  dataForm:FormGroup
  passNo:number;


  constructor(private route:ActivatedRoute,private reservService:ReservationService,private router:Router) { }

  ngOnInit() {
    const passFields =new FormArray([]);
    this.route.params
    .subscribe(
      (param:Params)=>{this.passNo= + param["id"]}
    );
    
    for(let i=0 ;i<this.passNo;i++)
    {
      passFields.push(new FormGroup({
        "fname" :new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        "lname":new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        "mobile":new FormControl(null,[Validators.required,Validators.pattern(/^\+?[0][0-9(),.-]{9}$/)])
      }))
    }
    
    this.dataForm=new FormGroup({
            fields:passFields 
            });

  }

  onDataSubmit()
  {

    const passengerInfo:Passenger[]=[];
    // console.log(this.dataForm.value["fields"]);
    const fields=this.dataForm.value["fields"];
    //looping all passengers
   for(let field of fields )
   {
       passengerInfo.push(field);
   }
   console.log(passengerInfo);
    this.reservService.setPassenger(passengerInfo);
    this.router.navigate(["../../summary"],{relativeTo:this.route});
  

  }
  getControls()
  {
    return (<FormArray>this.dataForm.get('fields')).controls; 
  }
}
