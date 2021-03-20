import { Component,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';
import { IEvent, ISession } from '../../index'
@Component({
 selector:'event-app',
 templateUrl:'./event-detail.component.html',
 styleUrls:[]
})

export class EventDetailComponent{
  event?:IEvent;
  addMode?:boolean
  

  constructor(private eventService:EventService, private route:ActivatedRoute){}

ngOnInit(id:any){
  this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  console.log(this.event)
}

buttonMode(){
  this.addMode = true
}

saveNewSession(session:ISession){
  const nextId = Math.max.apply(null, this.event!.sessions.map(s => s.id)) 
  session.id = nextId + 1
  this.event!.sessions.push(session)
  this.eventService.updateEvent(this.event)
  this.addMode = false
}

}