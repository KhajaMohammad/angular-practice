import { Component, signal  } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

counterValue = signal(0);
  incremrnt(){


    this.counterValue.update(x=>x+1);


  }
  decrement(){this.counterValue.update(x=>x-1)}
  reset(){this.counterValue.set(0)}


}
