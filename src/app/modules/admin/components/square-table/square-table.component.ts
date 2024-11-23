import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square-table',
  templateUrl: './square-table.component.html',
  styleUrl: './square-table.component.css'
})
export class SquareTableComponent {
  @Output()
  editSquareEmitter = new EventEmitter();

  @Output()
  removeSquareEmitter = new EventEmitter();

  @Output()
  addEmitter = new EventEmitter();

  @Output()
  editEmitter = new EventEmitter();

  @Output()
  removeEmitter = new EventEmitter();

  editSquare(){
    this.editSquareEmitter.emit();
  }

  removeSquare(){
    this.removeSquareEmitter.emit();
  }

  add(){
    this.addEmitter.emit();
  }

  edit(){
    this.editEmitter.emit();
  }

  remove(){
    this.removeEmitter.emit();
  }

  @Input()
  square: any = {}
}
