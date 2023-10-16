import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit{
  // @Input() counter :any;
  counter!: number;
  
  constructor(private store:Store<{counter : {counter : number}}>){

  }

  ngOnInit(){
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
    })
  }

}
