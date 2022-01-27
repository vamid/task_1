import { Button, Container } from "@mui/material";
import Scheduler from "components/Scheduler";
import TitlePage from "components/TitlePage";

export default function Calendar() {
  return (
    <Container>
      <section
        id="CalendarHeader"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <TitlePage title="Calendar" />
        <Button
          style={{ textTransform: "none", backgroundColor: "#5cc995" }}
          variant="contained"
        >
          Schedule New
        </Button>
      </section>

      <section id="CalendarBody">
        <Scheduler />
      </section>
    </Container>
  );
}
