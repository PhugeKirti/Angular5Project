import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
selector: 'Login-component',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent{ 

    constructor(private router: Router){

    }
  public LoginForm= new FormGroup({
     username: new FormControl(),
     password: new FormControl(),

});

onSubmit() {
    console.log(this.LoginForm.value);
    var obj : object;
    obj=this.LoginForm.value;
    console.log(obj.username);

    if(obj.username === "admin" && obj.password==="admin")
    {
        this.router.navigate(['/dashboard']);
            alert("Login Successfull");
    }
    else{
    alert("Please Check your credentials");
    }
 } 
}