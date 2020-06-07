import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[set-class-on-visible]'
})
export class AnimateOnScroll {

  private  elem;//the elem we are watching to see if it scrolls into position
  private attr:string;
  @Input("visible-class") className;

  constructor(el: ElementRef) {
    var thisref = this;
    this.elem = el.nativeElement;
    var elem = el.nativeElement;
    var className:string  = this.className;


    if(window.innerHeight){//if on scroll listeners supported
      window.addEventListener("scroll", scrollEvt);
    }

    scrollEvt();
    function scrollEvt() {
        var rect = elem.getBoundingClientRect();
        if(window.innerHeight){
          if(window.innerHeight>rect.top){
            elem.classList.add(thisref.className);
          }
          else{
            elem.classList.remove(thisref.className);
          }
        }
      };

  }

    
  
}