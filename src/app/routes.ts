import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventListComponent } from './event-list.component';
import { CreateEventComponent } from './event/create-event';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventRouterActivator } from './event/event-detail/event-router-activator.service';
import { EventListResolver } from './shared/event-list-resolver.service';
import { ProfileComponent } from './users/profile.component';

export const appRoutes: Routes = [
  { path: 'create/new', component: CreateEventComponent, canDeactivate:['canDeactiveCreateEvent']
  },
  { path: 'events', component: EventListComponent, 
  resolve:{events:EventListResolver} },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouterActivator],
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path:'profile', component: ProfileComponent},
  {path:'user', loadChildren:'users/user.module#UserModule'}
];
