import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as firebase from "firebase"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'flightReservation';

 
 ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyBUSWgYvxlHD5uPns3ziO73yKFFj1vlu9U",
    authDomain: "flightbook-6d27f.firebaseapp.com",
  })
 }
}
