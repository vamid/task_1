import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./Sidebar.scss";

export const Sidebar = () => {
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
            <Grid className="sidebar" item xs={5}>
              <ListItemIcon className="sidebar-icon">
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </Grid>
            <Grid className="sidebar-list" item xs={7}>
              <ListItemText className="sidebar-list-item" primary={text} />
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};
