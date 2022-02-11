import TitlePage from "components/TitlePage";
import "./Calendar.scss";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";

const currentDate = "2021-11-01";
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
  return (
    <Container>
      <section id="CalendarHeader" className="calendar-container">
        <TitlePage title="Calendar" />
        <Button variant="contained" id="newSchedule-btn">
          Schedule New
        </Button>
      </section>
      <section id="CalendarBody">
        <Paper></Paper>
      </section>
    </Container>
  );
}