import { Directive, input , inject , ElementRef , effect   } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]'
})
export class HighlightCompleteTodo {
  isCompleted = input(false);
  el = inject(ElementRef);
  stylesEffect= effect(()=>{
    if(this.isCompleted()){
this.el.nativeElement.style.textDecoration = 'line-through';
this.el.nativeElement.style.backgroundcolor = '#6c747d';
this.el.nativeElement.style.fontStyle = 'italic';
}
else{
this.el.nativeElement.style.textDecoration = 'none';
this.el.nativeElement.style.backgroundcolor = '#fff';
this.el.nativeElement.style.fontStyle = 'Bold';
}




  })

}
