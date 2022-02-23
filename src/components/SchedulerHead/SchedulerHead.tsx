import { TableCell, TableHead, TableRow } from "@mui/material";
import { daysBetweenDates } from "components/SchedulerBody/utils";
import { ISchedulerHead } from "./types";

const tableDates = (startDate: Date, endDate: Date) => {
  const days = daysBetweenDates(startDate, endDate);
  return Array.apply(null, Array(days)).map((_, index) => (
    <TableCell
      style={{ borderStyle: "solid" }}
      align="center"
      key={(index + startDate.getDate()).toString()}
    >
      {startDate.getDate() + index}
    </TableCell>
  ));
};

export const SchedulerHead = ({ startDate, endDate }: ISchedulerHead) => (
  <TableHead>
    <TableRow>
      <TableCell align="left" width={150}></TableCell>
      {tableDates(startDate, endDate)}
    </TableRow>
  </TableHead>
);
