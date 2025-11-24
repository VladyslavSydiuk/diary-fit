import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-exercise',
  imports: [],
  templateUrl: './modal-exercise.html',
  styleUrl: './modal-exercise.css',
})
export class ModalExercise {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  onBackgroundClick(e: MouseEvent){
    if (e.target === e.currentTarget) this.close.emit();
  }

}
