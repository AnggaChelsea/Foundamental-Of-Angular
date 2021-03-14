import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
import { IUser } from './user.model'
import { Validators } from '@angular/forms';

@Component({
  selector:'app-login',
  templateUrl:'login.component.html',
  styleUrls:[]
})

export class LoginComponent {
  data:any
  mouseoverLogin:any;
  constructor(private authService: AuthService, private router:Router, private validate:Validators){}

  formValues!:IUser

  login(formValues:any){
    this.authService.loginService(formValues.username, formValues.password)
    this.router.navigate(['events'])
  }

}