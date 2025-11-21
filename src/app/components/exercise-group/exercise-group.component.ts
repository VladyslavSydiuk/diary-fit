import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExerciseComponent} from '../exercise/exercise.component';
import {ExerciseGroup} from '../../interfaces/exercise-group.interface';

@Component({
  selector: 'app-exercise-group',
  imports: [CommonModule, ExerciseComponent],
  templateUrl: './exercise-group.component.html',
  styleUrl: './exercise-group.component.css',
})
export class ExerciseGroupComponent {

  @Input() exerciseGroup!: ExerciseGroup;
  @Input() index!: number;

}
