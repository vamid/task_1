export interface ITask {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}
export interface IUserTask {
  name: string;
  description: string;
  tasks: Array<ITask>;
}

export interface IUserNormalizedTask {
  name: string;
  description: string;
  tasksMatrix: Array<Array<ITask>>;
}
export interface IMatrixUserTask {
  name: string;
  description: string;
  tasks: Array<Array<ITask>>;
}
