import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor(){}

  ngOnInit(): void{}



  Increment(){

   this.increment.emit()

  }

  Decrement(){
   this.decrement.emit()
  }
  Reset(){
  this.reset.emit()
  }

}
