import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor() { }

  @HostBinding('width')width: any
  @HostListener('mouseenter', ['$event'])
  onHover(e:any){
    this.width = 300
  }

}
