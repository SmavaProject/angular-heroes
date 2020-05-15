import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
    console.log("directive is running");
  }
  @HostListener('mouseenter', ['$event']) onMouse(event: any) {
    console.log("directive is running !!!");
  }

  @HostListener('click', ['$event']) onClick(event: any) {
    console.log("directive is running on click!!!");
    console.log(event.target);
  }
}
