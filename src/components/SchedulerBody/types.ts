import { ITask, IUserTask } from "components/Scheduler/types";

export interface ISchedulerBody {
  usersTasks: Array<IUserTask>;
  startDate: Date;
  endDate: Date;
}

export type RowDurationHelper = {
  duration: number;
  prevTask: ITask;
};
