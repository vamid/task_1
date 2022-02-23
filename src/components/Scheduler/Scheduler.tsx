import "./Scheduler.scss";
import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { IUserTask } from "./types";
import { altData, endDate, startDate } from "./mock/mock";
import SchedulerBody from "components/SchedulerBody";
import SchedulerHead from "components/SchedulerHead";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Scheduler = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [sdate, nextStartDate] = React.useState(startDate);
  const [edate, nextEndDate] = React.useState(
    new Date(startDate.getTime() + 7 * (1000 * 3600 * 24))
  );

  const [data, setData] = React.useState(Array<IUserTask>());

  React.useEffect(() => {
    // fetch("https://swapi-deno.azurewebsites.net/api/starships") //alternative to swapi.dev
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    /* eslint-disable  @typescript-eslint/no-use-before-define */
    setData(altData);
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.ChangeEvent<HTMLInputElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <div>{/*Btn вне таблицы вместе с пагинацией или без неё*/}</div>
            <Button>February 2022</Button>
            <TablePagination
              // rowsPerPageOptions={[5, 10, 25]}
              count={data.length}
              rowsPerPage={10}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
              }}
              onPageChange={() => handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              //ActionsComponent={TablePaginationActions}
              //component={Box}
              labelDisplayedRows={({ page }) => {
                return `Page: ${page}`;
              }}
              backIconButtonProps={{
                color: "secondary",
              }}
              nextIconButtonProps={{ color: "secondary" }}
              showFirstButton={true}
              showLastButton={true}
              labelRowsPerPage={<span>Rows:</span>}
              // sx={{
              //   ".MuiTablePagination-toolbar": {
              //     backgroundColor: "rgba(100,100,100,0.5)",
              //   },
              //   ".MuiTablePagination-selectLabel, .MuiTablePagination-input":
              //     {
              //       fontWeight: "bold",
              //       color: "blue",
              //     },
              // }}
            />
          </TableRow>
        </TableHead>
        <SchedulerHead startDate={sdate} endDate={edate} />
        <SchedulerBody
          usersTasks={altData}
          startDate={sdate}
          endDate={edate}
        />

        <ArrowBackIosNewIcon />
        <Button
          onClick={() => {
            nextStartDate(new Date(sdate.getTime() - 1000 * 3600 * 24));
            nextEndDate(new Date(edate.getTime() - 1000 * 3600 * 24));
          }}
        >
          Previous
        </Button>
        <ArrowForwardIosIcon />
        <Button
          onClick={() => {
            nextStartDate(new Date(sdate.getTime() + 1000 * 3600 * 24));
            nextEndDate(new Date(edate.getTime() + 1000 * 3600 * 24));
          }}
        >
          Next
        </Button>
      </Table>
    </TableContainer>
  );
};
