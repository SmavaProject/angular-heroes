import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
    console.log("directive is running");
  }
  @HostListener('mouseenter') onMouse() {
    console.log("directive is running !!!");
  }

  @HostListener('click') onClick() {
    console.log("directive is running on click!!!");
  }
}
