import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // checkerr:boolean=false;

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onRegister(registerForm:NgForm)
  {
    console.log(registerForm);
    let email=registerForm.value.email;
    let password=registerForm.value.pass;
    this.authservice.signUpUser(email,password);
  }

}
