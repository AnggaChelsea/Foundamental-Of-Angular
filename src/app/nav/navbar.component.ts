import { Component } from '@angular/core';

@Component({
  selector:'nav-bar',
  templateUrl:'./nav-bar.component.html',
  styles:[`
  li > a.active{
      color: orange !important;
  }`]
})

export class NavBarComponent{

}