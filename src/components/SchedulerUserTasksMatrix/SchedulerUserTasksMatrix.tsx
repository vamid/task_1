import { ITask } from "components/Scheduler/types";
import { daysBetweenDates } from "components/SchedulerBody/utils";

type SDSA = {
  duration: number;
  prevTask: ITask;
};

const rowDuration = (row: Array<ITask>, _startDate: Date) => {
  return row.reduce((acc, _task, _index) => {
    if (_index === 0) {
      acc.duration = daysBetweenDates(_startDate, _task.endDate);
    } else {
      daysBetweenDates(acc.prevTask.endDate, _task.endDate);
    }
    acc.prevTask = _task;
    return acc;
  }, {} as SDSA).duration;
};

export const SchedulerUserTasksRender = (
  userTasks: Array<ITask>,
  startDate: Date,
  endDate: Date
) => {
  const userTasksCopy = userTasks.slice();
  const maxDuration = daysBetweenDates(startDate, endDate);

  let al = userTasksCopy.reduce(
    (taskRow, currentTask, index, _array) => {
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

  al = al.filter((row, index) => row.length > 0);

  return al;
};
