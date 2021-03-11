import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent{
  isDirty:any = true
  constructor(private router:Router){}

  cancle(){
    this.router.navigate(['/events'])
  }
}