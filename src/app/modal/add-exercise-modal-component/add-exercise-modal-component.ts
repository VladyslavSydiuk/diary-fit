import {Component, EventEmitter, inject, Inject, Input, OnInit, Output, signal} from '@angular/core';
import {Exercise} from '../../interfaces/exercise-group.interface';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {ExerciseService} from '../../services/trigger-request';

@Component({
  selector: 'app-add-exercise-modal-component',
  imports: [
    FormsModule
  ],
  templateUrl: './add-exercise-modal-component.html',
  styleUrl: './add-exercise-modal-component.css',
})
export class AddExerciseModalComponent implements OnInit {

  private readonly matDialogRefService = inject(MatDialogRef);
  constructor(@Inject(MAT_DIALOG_DATA) public data: Exercise[]) {
  }

  public closeModal(){
    this.matDialogRefService.close();
  }
  private exerciseService = inject(ExerciseService);
  ngOnInit(): void {
    console.log(this.data)
        this.existingExercises = this.data
    }


  public existingExercises: Exercise[] = [];


  selectedId = signal<number | null>(null);
  newTitle = signal('');
  newTitleError = signal('');

  async save() {
    if(!this.newTitle()){
      this.newTitleError.set('Ty sho kazel')
      return;
    }else{
      await this.exerciseService.add({
        title: this.newTitle(),
        sets: 0,
        times: 0,
        createdAt: Date.now()
      });
      await this.exerciseService.getAll()

      this.matDialogRefService.close();
    }


  }
}
