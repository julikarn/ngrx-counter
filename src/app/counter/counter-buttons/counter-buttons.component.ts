import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store: Store<{counter: CounterState}>){}

  ngOnInit(): void{}



  Increment(){
   
    this.store.dispatch(increment());
  //  this.increment.emit()

  }

  Decrement(){
  //  this.decrement.emit()
  this.store.dispatch(decrement())
  }
  Reset(){
  // this.reset.emit()
  this.store.dispatch(reset())
  }

}
