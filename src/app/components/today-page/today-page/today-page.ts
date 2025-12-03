import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Exercise, ExerciseGroup} from '../../../interfaces/exercise-group.interface';
import {ExerciseComponent} from '../../exercise/exercise.component';
import {AddExerciseModalComponent} from '../../../modal/add-exercise-modal-component/add-exercise-modal-component';
import {SharedDialogService} from '../../../services/shared-modal-service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ExerciseService} from '../../../services/trigger-request';

@Component({
  selector: 'app-today-page',
  imports: [CommonModule, ExerciseComponent],
  templateUrl: './today-page.html',
  styleUrl: './today-page.css',
})
export class TodayPage implements OnInit {

  exercises = signal<Exercise[]>([])
  private readonly serviceModal = inject(SharedDialogService);
  private readonly destroyRef = inject(DestroyRef);

  constructor(public exerciseService: ExerciseService) {
  }

  async ngOnInit() {
    await this.exerciseService.getAll();

    this.exerciseService.exerciseData$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (data != null) {
          this.exercises.set(data);
        }
      })
  }

  openAdd() {
    this.serviceModal.open(AddExerciseModalComponent, {
      data: this.exercises(),
      width: '500px',
      panelClass: 'my-custom-dialog',
    })
  }
}

