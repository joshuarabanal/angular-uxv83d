import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[set-class-on-visible]'
})
export class AnimateOnScroll {

  private  elem;//the elem we are watching to see if it scrolls into position
  private attr:string;
  @Input("visible-class") className;

  private listener;

  constructor(el: ElementRef) {
    this.elem = el.nativeElement;
    var elem = el.nativeElement;
    var className:string  = this.className;

    this.listener = this.scrollEvt.bind(this);
    if(window.innerHeight){//if on scroll listeners supported
      window.addEventListener("scroll", this.listener);
    }

    this.listener();
    

  }
  scrollEvt() {
        var rect = this.elem.getBoundingClientRect();
        if(window.innerHeight){
          if(window.innerHeight>rect.top){
            this.elem.classList.add(this.className);
          }
          else{
            this.elem.classList.remove(this.className);
          }
        }
      };

    
  
}