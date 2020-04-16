import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blue]'
})
export class BlueDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#1c4587"
   }

}
