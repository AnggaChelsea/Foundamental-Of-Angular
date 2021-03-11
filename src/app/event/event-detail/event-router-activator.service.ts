import { Router, ActivatedRouteSnapshot, CanActivate,CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../../shared/event.service';

@Injectable()
export class EventRouterActivator implements CanActivate {
  constructor(private router: Router, private eventService: EventService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExist) this.router.navigate(['/404']);
    return eventExist;
  }
  
}

//tinggal import activatedRoute di bagian module dan bagian component ts lainnya
