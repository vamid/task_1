import { ITask, IUserTask } from "components/Scheduler/types";
import { RowDurationHelper } from "./types";

export const sortTasksByDate = (userTasks: Array<ITask>) => {
  return userTasks.sort((task, nextTask) => {
    if (task.startDate < nextTask.startDate) return -1;
    if (task.startDate > nextTask.startDate) return 1;
    return 0;
  });
};

export const filterIncorrectTasks = (
  userTasks: Array<ITask>,
  startDate: Date,
  endDate: Date
) => {
  return userTasks.filter((task) => {
    if (task.endDate < task.startDate) return false;
    if (task.startDate > endDate) return false;
    if (startDate > task.endDate) return false;
    return true;
  });
};

export const daysBetweenDates = (startDate: Date, endDate: Date) =>
  Math.ceil(
    Math.abs((startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24)) + 1
  );

export const taskDuration = (task: ITask) =>
  daysBetweenDates(task.startDate, task.endDate);

export const rowDuration = (row: Array<ITask>, _startDate: Date) => {
  return row.reduce((acc, _task, _index) => {
    if (_index === 0) {
      acc.duration = daysBetweenDates(_startDate, _task.endDate);
    } else {
      daysBetweenDates(acc.prevTask.endDate, _task.endDate);
    }
    acc.prevTask = _task;
    return acc;
  }, {} as RowDurationHelper).duration;
};

export const schedulerBodyMatrixBuilder = (
  userTasks: Array<ITask>,
  startDate: Date,
  endDate: Date
) => {
  const userTasksCopy = userTasks.slice();
  const maxDuration = daysBetweenDates(startDate, endDate);

  let userTasksMatrix = userTasksCopy.reduce(
    (taskRow, currentTask) => {
      for (let row of taskRow) {
        if (row.length > 0) {
          if (rowDuration(row, startDate) < maxDuration) {
            if (row[row.length - 1].endDate < currentTask.startDate) {
              row.push(currentTask);
              break;
            } else {
              taskRow.push([]);
            }
          }
        } else {
          row.push(currentTask);
          break;
        }
      }
      return taskRow;
    },
    [[]] as Array<Array<ITask>>
  );

  return userTasksMatrix.filter((row, index) => row.length > 0);
};
