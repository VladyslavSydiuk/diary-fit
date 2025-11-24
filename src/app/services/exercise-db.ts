import { Injectable } from '@angular/core';
import {Dexie, Table} from 'dexie';
import {Exercise} from '../interfaces/exercise-group.interface';

@Injectable({
  providedIn: 'root',
})
export class ExerciseDb extends Dexie{
  exercises!: Table<Exercise, number>;

  constructor() {
    super('DiaryDB')
    this.version(1).stores({
      exercises: '++id, title, sets, times, createdAt'
    });
  }


}
