import {Injectable, signal} from '@angular/core';
import {Exercise} from '../interfaces/exercise-group.interface';
import {ExerciseDb} from './exercise-db';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  constructor(private db: ExerciseDb) {}

  getAll(){
    return this.db.exercises.toArray();
  }
  add(exercise: Omit<Exercise, 'id'>){
    return this.db.exercises.add(<Exercise>exercise);
  }

  update(id:number, changes: Partial<Exercise>){
    return this.db.exercises.update(id, changes);
  }
  delete(id:number){
    return this.db.exercises.delete(id);
  }


  //This is a signal that holds the list of exercises
  exercises = signal<Exercise[]>([]);

  addExercise(exercise: Exercise) {
    //Update the list of exercises by adding the new exercise to signal
    this.exercises.update(currentList => [...currentList, exercise])
  }

  getExercises() {
    return this.exercises();
  }

}
