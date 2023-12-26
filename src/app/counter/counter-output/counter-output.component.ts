import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {

  // @Input() counter:any;
  counters: number | undefined;
  constructor(private store: Store<{counter: {counter: number}}>){}

  ngOnInit(): void{
    this.store.select('counter').subscribe((data)=>{
      this.counters = data.counter;
    })
  }

  
  

}
