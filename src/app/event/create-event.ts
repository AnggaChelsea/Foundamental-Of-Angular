import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { EventService } from '../shared/event.service'

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent{
  isDirty:any = true
  newEvent:any;
  constructor(private router:Router, private eventService:EventService){}

  cancle(){
    this.router.navigate(['/events'])
  }
  saveEvent(formValues:any){
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }
}