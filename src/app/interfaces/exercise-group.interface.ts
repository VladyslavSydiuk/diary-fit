
export interface ExerciseGroup {
  title: string;
  exercises: Exercise[];

}

export interface Exercise {

  id: number;
  title: string;
  sets: number;
  times: number;

}
