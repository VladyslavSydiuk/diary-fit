import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {ExerciseGroupComponent} from './components/exercise-group/exercise-group.component';
import {Exercise, ExerciseGroup} from './interfaces/exercise-group.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule,ExerciseGroupComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {

  public exerciseGroups: ExerciseGroup[];

  constructor() {
    this.exerciseGroups = [{
      title:'First',
      exercises:[{
      id:1,
      title: 'Push-ups',
      sets: 0,
      times: 0
      }]
    }]
  }

}
