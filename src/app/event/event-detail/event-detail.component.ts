import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';

@Component({
 selector:'event-app',
 templateUrl:'./event-detail.component.html',
 styleUrls:[]
})

export class EventDetailComponent{
  event:any;

  constructor(private eventService:EventService, private route:ActivatedRoute){}

ngOnInit(id:any){
  this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  console.log(this.event)
}

}