import {Component, Input} from '@angular/core';
import {Exercise} from '../../interfaces/exercise-group.interface';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent {

  @Input() exercise!: Exercise;
  @Input() index!: number;

  onAdd() {
    console.log('Button clicked for:', this.exercise.title);
    // Тут буде логіка додавання
  }

}
