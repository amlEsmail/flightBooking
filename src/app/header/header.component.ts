import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowen:boolean=false;
  
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onLogOut()
  {
    this.authservice.logOut();
  }

  isAuthenticated() {
    return this.authservice.isAuthenticated();
  }

}
