import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

ValidateUser(LoginForm : any) {
 if(LoginForm.username==="admin" && LoginForm.password==="admin")
 {
     return true;
 }
 else
 {
     return false;
 }

}
}