import {Component, Inject, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Exercise} from '../../interfaces/exercise-group.interface';

import {ExerciseService} from '../../services/trigger-request';

@Component({
  selector: 'app-delete-model',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css',
})
export class DeleteModal {

  private exerciseService = inject(ExerciseService)
  private readonly matDialogRefService = inject(MatDialogRef);
  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {
  }

  public closeModal(){

    this.matDialogRefService.close();
  }
  public async onDelete(){
    this.exerciseService.delete(this.data);
    await this.exerciseService.getAll();
    this.closeModal();
  }

}
