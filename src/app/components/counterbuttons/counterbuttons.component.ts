import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent {
  constructor(private store: Store<{counter : {counter: number}}>){

  }

  // -------------Without NGRX------------------
  // @Output() counterAct = new EventEmitter<any>
  // onIncrement(action :string){
  //   this.counterAct.emit(action);

  // }

  // onDecrement(action: string){
  //   this.counterAct.emit(action);
    
  // }

  // onReset(action: string){
  //   this.counterAct.emit(action);
    
  // }
// -----------------------------------------------------

// ------------------------With NGRX----------------------
  onIncrement(action :string){
    this.store.dispatch(increment());

  }

  onDecrement(action: string){
    this.store.dispatch(decrement());
    
    
  }

  onReset(action: string){
  this.store.dispatch(reset());
    
  }



}
