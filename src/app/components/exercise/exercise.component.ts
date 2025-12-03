import {Component, inject, Input} from '@angular/core';
import {Exercise} from '../../interfaces/exercise-group.interface';
import {SharedDialogService} from '../../services/shared-modal-service';
import {DeleteModal} from '../../modal/delete-model/delete-modal.component';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent {

  @Input() exercise!: Exercise;
  @Input() index!: number;
  private readonly serviceModal = inject(SharedDialogService);


  onAdd() {
    console.log('Button clicked for:', this.exercise.id);
    // Тут буде логіка додавання
  }

  public openModalDelete() {
    this.serviceModal.open(DeleteModal, {
      data: this.exercise.id,
      width: '400px',
      panelClass: 'delete-modal',
    })
  }
}
