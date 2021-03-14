import { Component } from '@angular/core';
import { AuthService } from '../users/auth.service'
@Component({
  selector:'nav-bar',
  templateUrl:'./nav-bar.component.html',
  styles:[`
  li > a.active{
      color: orange !important;
  };
  em{
    color:red;
  }
  
  `]
})

export class NavBarComponent{

  constructor(public authService: AuthService){}

}