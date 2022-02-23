import {
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import "./Sidebar.scss";
import { Icon } from "@mui/material";
import { ISidebarMenuItem } from "./types";
import { SidebarMenuItems } from "./constants";

export const Sidebar = () => {
  const renderMenuItem = ({ title, icon }: ISidebarMenuItem) => {
    return (
      <MenuItem key={title}>
        <Grid container spacing={0}>
          <Grid className="sidebar" item xs={5}>
            <ListItemIcon className="sidebar-icon">
              <Icon component={icon} />
            </ListItemIcon>
          </Grid>
          <Grid className="sidebar-list" item xs={7}>
            <ListItemText className="sidebar-list-item" primary={title} />
          </Grid>
        </Grid>
      </MenuItem>
    );
  };

  const renderMenuItems = () => SidebarMenuItems.map(renderMenuItem);

  return <MenuList>{renderMenuItems()}</MenuList>;
};
