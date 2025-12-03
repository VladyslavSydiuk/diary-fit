import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {Exercise} from "../interfaces/exercise-group.interface";
import {ExerciseDb} from "./exercise-db";

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  private exerciseData = new BehaviorSubject<Exercise[] | null>(null);
  public exerciseData$ = this.exerciseData.asObservable();

  constructor(private db: ExerciseDb) {
  }

  async getAll() {
    const data = await this.db.exercises.toArray();
    this.exerciseData.next(data);
  }

  add(exercise: Omit<Exercise, 'id'>) {
    return this.db.exercises.add(<Exercise>exercise);
  }

  update(id: number, changes: Partial<Exercise>) {
    return this.db.exercises.update(id, changes);
  }

  delete(id: number) {
    return this.db.exercises.delete(id);
  }


}
