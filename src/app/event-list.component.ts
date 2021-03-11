import { Component,OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from './common/toastr.service'
import { ActivatedRoute } from '@angular/router';
declare const toastr:any;

@Component({
selector: 'event-list',
template:`<div><h1>Up coming angular event</h1>
<hr>
<div class="row">
<div *ngFor="let event of events" class="col-md-5">
<event-thumbnail (click)="handleClickEvent(event.name)"  [event]="event"></event-thumbnail>
</div>
</div>
</div>`
})

export class EventListComponent implements OnInit {
  events:any;
  popupData:any;

  constructor(private eventService: EventService, private toastrService: ToastrService, private router:ActivatedRoute){
  }

  ngOnInit() {
    //this array events export to route event list
    this.events = this.router.snapshot.data['events']
    //['event'] match to event in the route
  }

  getAllData(){

  }

  handleClickEvent(eventName:any){
    this.toastrService.success(eventName)
  }


}