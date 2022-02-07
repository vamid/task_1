import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import TitlePage from "components/TitlePage";
import "./Calendar.scss";
import DatePicker from "@mui/lab/DatePicker";
import Paper from "@mui/material/Paper";
import {
  Appointments,
  DayView,
  Scheduler,
  Toolbar,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { LocalizationProvider } from "@mui/lab";

const currentDate1 = "2021-11-01";
const schedulerData = [
  {
    startDate: "2021-11-01T09:45",
    endDate: "2021-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2021-11-01T12:00",
    endDate: "2021-11-01T13:30",
    title: "Go to a gym",
  },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date | null>(
    new Date("2021-11-01")
  );
  useEffect(() => {
    setCurrentDate(new Date());
  }, [currentDate]);
  return (
    <Container>
      <section id="CalendarHeader" className="calendar-container">
        <TitlePage title="Calendar" />
        <Button variant="contained" id="newSchedule-btn">
          Schedule New
        </Button>
      </section>

      <section id="CalendarBody">
        <Paper>
          <Scheduler data={schedulerData} height={800}>
            <ViewState currentDate={currentDate1} />
            {/* <DayView startDayHour={9} endDayHour={14} /> */}
            <WeekView startDayHour={8} endDayHour={15} />
            <Appointments />
            <Toolbar />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={currentDate}
                onChange={(newValue) => {
                  setCurrentDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Scheduler>
        </Paper>
      </section>
    </Container>
  );
}
