import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy {

  // @Input() counter:any;
  counters: number | undefined;
  counterSubscription: Subscription = new Subscription;
  counter$!: Observable<{ counter: number; }>;

  constructor(private store: Store<{counter: CounterState}>){}

  ngOnInit(): void{
    // this.store.select('counter').subscribe((data)=>{
    //   this.counters = data.counter;
    // })

   this.counterSubscription = this.store.select('counter').subscribe((data)=>{
      this.counters = data.counter;
    })

    this.counter$ = this.store.select('counter');

   
  }

  ngOnDestroy(){

    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
      
  }

  
  

}


