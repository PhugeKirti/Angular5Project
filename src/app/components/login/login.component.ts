import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
selector: 'Login-component',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
providers: [LoginService]
})

export class LoginComponent{ 

    constructor(private router: Router, private LoginService: LoginService){

    }
  
  public LoginForm= new FormGroup({
     username: new FormControl(null, [Validators.required]),
     password: new FormControl(null, [Validators.required]),

});

onSubmit() {
    console.log(this.LoginForm.value);

   if(this.LoginService.ValidateUser(this.LoginForm.value))
   {
       this.router.navigate(['/dashboard']);
       alert("Login Successfull");
   }
   else
   {
      alert("Please Check your credentials");
   }
 } 
}