import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Sidebar() {
  return (
    <List>
      {[
        "Dashboard",
        "Projects",
        "Calendar",
        "Tasks",
        "Reports",
        "Settings",
      ].map((text, index) => (
        <ListItem button key={text}>
          <Grid container spacing={0}>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
              item
              xs={5}
            >
              <ListItemIcon style={{ justifyContent: "right" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </Grid>
            <Grid style={{ display: "flex", alignItems: "center" }} item xs={7}>
              <ListItemText style={{ width: "fit-content" }} primary={text} />
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
}
