import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import TitlePage from "components/TitlePage";
import "./Calendar.scss";
import Paper from "@mui/material/Paper";
import {
  Appointments,
  DateNavigator,
  DayView,
  Scheduler,
  Toolbar,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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
  const DatePicker = () => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={currentDate}
          onChange={(newDate) => setCurrentDate(newDate)}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
        />
        {console.log("here")}
      </MuiPickersUtilsProvider>
    );
  };

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
            <DateNavigator openButtonComponent={DatePicker} />
          </Scheduler>
        </Paper>
      </section>
    </Container>
  );
}
