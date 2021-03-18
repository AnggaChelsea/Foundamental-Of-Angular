import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventListComponent,
  EventListResolver,
  EventThumbnailComponent,
  EventRouterActivator,
  EventDetailComponent,
  CreateEventComponent,
  CreateSesssionComponent
} from './index';

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { EventService } from './shared/event.service';
import { Error404Component } from './errors/404.component';
import { StyleDirective } from './shared/style.directive';
import { AuthService } from './users/auth.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)],
  declarations: [
    EventAppComponent,
    CreateSesssionComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    StyleDirective,
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolver,
    EventRouterActivator,
    AuthService,
    {
      provide: 'canDeactiveCreateEvent',
      useValue: checkCoba,
    },
  ],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
export function checkCoba(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      'serious kamu mau keluar sedangkan data belum di save'
    );
  return true;
}
