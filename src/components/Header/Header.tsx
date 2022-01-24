import "./Header.scss";
import { Grid } from "@mui/material";
import SearchInput from "components/SearchInput/SearchInput";
import Character from "components/Character";
import IHeader from "./types";
import UserNotifications from "components/UserNotifications";

export const Header: React.FC<IHeader> = ({ user }) => (
  <Grid className="header" container spacing={2}>
    <Grid item xs={4}>
      <SearchInput />
      {console.log(user)}
    </Grid>
    <Grid item xs={4}></Grid>
    <Grid className="header-user" item xs={4}>
      <Character {...user} />
      <UserNotifications />
    </Grid>
  </Grid>
);
