import { TableCell, TableRow } from "@mui/material";
import EmptyTableCell from "components/EmptyTableCell";
import { ITask } from "components/Scheduler/types";
import { taskDisplayDuration, numberEmptyCellsFromStart } from "./utils";

export const SchedulerRowRender = (
  tasks: Array<ITask | undefined>,
  startDate: Date
) => {
  let schedulerRow: (JSX.Element | JSX.Element[])[] = [];
  let lastTaskEndDate: Date;
  tasks.map((task, index) => {
    if (!!task) {
      if (index === 0) {
        if (task.startDate > startDate)
          schedulerRow.push(
            EmptyTableCell(numberEmptyCellsFromStart(startDate, task))
          );
      } else {
        schedulerRow.push(
          EmptyTableCell(numberEmptyCellsFromStart(lastTaskEndDate, task) - 1)
        );
      }
      lastTaskEndDate = task.endDate;
      schedulerRow.push(
        <TableCell
          style={{ borderStyle: "solid" }}
          align="center"
          colSpan={taskDisplayDuration(startDate, task)}
        >
          {task.title}
        </TableCell>
      );
    }
    return 0;
  });
  return <TableRow>{schedulerRow}</TableRow>;
};
