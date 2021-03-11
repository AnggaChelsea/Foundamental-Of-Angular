import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector:'event-thumbnail',
  template:`
  <div class="cards">
  <div [routerLink]="['/events', event.id]" class="well hoverwell thubnaill">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div [ngClass]="pricePromo()" [ngSwitch]="event.price">
  price:{{event.price}}
    <div *ngSwitchCase="'400'">Promo Guys</div>
  </div>
  <div>location:{{event.location.address}}"</div>
  <div [ngClass]="getStart()" [ngSwitch]="event?.time">
    Time {{event?.time}}
  <span *ngSwitchCase="'10:00 am'">Early Morning</span>
  <span *ngSwitchCase="'9:00 am'">Afternoon</span>
  <span *ngSwitchDefault>Normal</span>
  </div>
  <div>city:{{event.location.city}}</div>
  <div>country:{{event.location.country}}</div>
  <div *ngIf="event?.image">
  <div>image : {{event.image}} appStyle</div>
  </div>
  
  </div>
  </div>`,
  styles:[`
    .thubnaill{
      padding:20px;
    }
    .green{
      color:green;
    }
   .red{
     color:red;
   }
  `]
  
})

export class EventThumbnailComponent{
 @Input() event:any;

 getStart(){
   const isEarly = this.event && this.event.time === '8:00 am'
   return {green: isEarly, bold: isEarly}
 }
 pricePromo(){
  const isPromo = this.event && this.event.price === 400;
  return {red: isPromo, bold: isPromo}
 }


}
