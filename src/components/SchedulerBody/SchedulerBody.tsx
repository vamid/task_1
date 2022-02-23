import { TableBody, TableCell, TableRow } from "@mui/material";
import { IUserNormalizedTask, IUserTask } from "components/Scheduler/types";
import SchedulerRowRender from "components/SchedulerRow";
import React from "react";
import { ISchedulerBody } from "./types";
import {
  filterIncorrectTasks,
  schedulerBodyMatrixBuilder,
  sortTasksByDate,
} from "./utils";

export const SchedulerBody = ({
  usersTasks,
  startDate,
  endDate,
}: ISchedulerBody) => {
  let userTasksCopy = usersTasks.map((user) => Object.assign({}, user));

  userTasksCopy.map((user) => {
    user.tasks = filterIncorrectTasks(user.tasks, startDate, endDate);
    user.tasks = sortTasksByDate(user.tasks);
    return user;
  });

  userTasksCopy = userTasksCopy.filter((user) => {
    if (user.tasks.length > 0) return true;
    return false;
  });

  const usersTasksMatrix = userTasksCopy.map((row: IUserTask) => {
    const { name, description } = row;
    return {
      name,
      description,
      tasksMatrix: schedulerBodyMatrixBuilder(row.tasks, startDate, endDate),
    } as IUserNormalizedTask;
  });
  
  return (
    <TableBody>
      {usersTasksMatrix.map((row: IUserNormalizedTask) => (
        <>
          <TableRow key={row.name}>
            <TableCell
              component="th"
              scope="row"
              rowSpan={row.tasksMatrix.length + 1}
            >
              {row.name}
            </TableCell>
          </TableRow>
          {row.tasksMatrix.map((tasksRow) =>
            SchedulerRowRender(tasksRow, startDate)
          )}
        </>
      ))}
    </TableBody>
  );
};
