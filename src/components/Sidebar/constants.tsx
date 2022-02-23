import { ISidebarMenuItem } from "./types";
import SpeedIcon from "@mui/icons-material/Speed";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import TodayIcon from "@mui/icons-material/Today";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarMenuItems: Array<ISidebarMenuItem> = [
  {
    title: "Dashboard",
    icon: SpeedIcon,
  },
  {
    title: "Projects",
    icon: FolderOpenIcon,
  },
  {
    title: "Calendar",
    icon: TodayIcon,
  },
  {
    title: "Tasks",
    icon: TaskAltIcon,
  },
  {
    title: "Reports",
    icon: AssignmentIcon,
  },
  {
    title: "Settings",
    icon: SettingsIcon,
  },
];
