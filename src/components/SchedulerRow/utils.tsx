import { ITask } from "components/Scheduler/types";
import { daysBetweenDates, taskDuration } from "components/SchedulerBody/utils";

export const numberEmptyCellsFromStart = (startDate: Date, task: ITask) =>
  daysBetweenDates(startDate, task.startDate) - 1;

export const taskDisplayDuration = (startDate: Date, task: ITask) => {
  if (task.startDate < startDate) {
    return daysBetweenDates(startDate, task.endDate);
  }
  return taskDuration(task);
};
