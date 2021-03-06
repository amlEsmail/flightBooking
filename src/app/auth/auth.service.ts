import * as firebase from "firebase"
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService{
    token:string;
    constructor(private router:Router){}

    signUpUser(email:string,password:string)
    {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            error =>{ console.log(error)}
        );
    
      

    }

    signInUser(email:string,password:string)
    {
      
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response=>{
                firebase.auth().currentUser.getIdToken()
                .then( token =>this.token=token  );
                this.router.navigate(["reservation"]);
             }
           
           )
        .catch(
            error=>console.log(error)
        );
    
       

    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token)=>{this.token=token}
        )
        return this.token;
    }

    isAuthenticated(){
        return this.token != null
      }

      logOut()
    {
        firebase.auth().signOut();
        this.token=null;
        this.router.navigate(["/"]);
    }

}