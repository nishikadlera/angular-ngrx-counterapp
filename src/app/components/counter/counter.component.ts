import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: any = 0;
  performAct(evt:any){
    console.log(evt)
    if(evt == 'increment'){
      this.counter++;
    }else if(evt == 'decrement'){
      this.counter--;
    }else if(evt == 'reset'){
      this.counter = 0;
    }

  }

}
