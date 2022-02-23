import { TableCell } from "@mui/material";

export const EmptyTableCell = (number: number) =>
  number > 0
    ? Array.apply(null, Array(number)).map(() => <TableCell></TableCell>)
    : [];
