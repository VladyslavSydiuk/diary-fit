import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {Exercise} from '../../interfaces/exercise-group.interface';
import {ModalExercise} from '../modal-exercise/modal-exercise';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-exercise-modal-component',
  imports: [
    ModalExercise,
    FormsModule
  ],
  templateUrl: './add-exercise-modal-component.html',
  styleUrl: './add-exercise-modal-component.css',
})
export class AddExerciseModalComponent {

  @Input() open = false;
  @Input() existingExercises: Exercise[] = [];

  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<{ title: string }>();
  @Output() chooseExisting = new EventEmitter<Exercise>();

  selectedId = signal<number | null>(null);
  newTitle = signal('');

  save() {
    if (this.selectedId()) {
      const ex = this.existingExercises.find(e => e.id === this.selectedId());
      if (ex) this.chooseExisting.emit(ex);
      return;
    }

    if (this.newTitle().trim()) {
      this.create.emit({ title: this.newTitle().trim() });
    }
  }
}
