import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExerciseService} from '../../../services/exercise-service';
import {Exercise, ExerciseGroup} from '../../../interfaces/exercise-group.interface';
import {ExerciseComponent} from '../../exercise/exercise.component';
import {AddExerciseModalComponent} from '../../../modal/add-exercise-modal-component/add-exercise-modal-component';

@Component({
  selector: 'app-today-page',
  imports: [CommonModule, ExerciseComponent, AddExerciseModalComponent],
  templateUrl: './today-page.html',
  styleUrl: './today-page.css',
})
export class TodayPage implements OnInit {

  exercises = signal<Exercise[]>([])

  constructor(public exerciseService: ExerciseService){}

  async ngOnInit(){
    const all = await this.exerciseService.getAll();
    this.exercises.set(all);
  }

  async addExercise() {
    this.showModal.set(true);
  }



  showModal = signal(false);

  openAdd() {
    this.showModal.set(true);
  }

  closeAdd() {
    this.showModal.set(false);
  }

  async onCreateNew(data: { title: string }) {
    await this.exerciseService.add({
      title: data.title,
      sets: 0,
      times: 0,
      createdAt: Date.now()
    });

    const list = await this.exerciseService.getAll();
    this.exercises.set(list);
    this.showModal.set(false);
  }

  async onChooseExisting(ex: Exercise) {
    // Example behavior: clone template for today
    await this.exerciseService.add({
      title: ex.title,
      sets: 0,
      times: 0,
      createdAt: Date.now()

    });

    const list = await this.exerciseService.getAll();
    this.exercises.set(list);
    this.showModal.set(false);
  }

}

