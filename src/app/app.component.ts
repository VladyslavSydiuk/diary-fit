import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {ExerciseGroupComponent} from './components/exercise-group/exercise-group.component';
import {Exercise, ExerciseGroup} from './interfaces/exercise-group.interface';
import {TodayPage} from './components/today-page/today-page/today-page';
import {ExerciseComponent} from './components/exercise/exercise.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, ExerciseGroupComponent, TodayPage],
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
      times: 0,
      createdAt: Date.now()
      }]
    }]
  }

}
