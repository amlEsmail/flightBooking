import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm)
  {
    let email=loginForm.value.email;
    let password=loginForm.value.password;
    this.authservice.signInUser(email,password);
  }

}
