import "./Header.scss";
import { Grid } from "@mui/material";
import SearchInput from "components/SearchInput/";
import Character from "components/Character";
import IHeader from "./types";
import UserNotifications from "components/UserNotifications";
import { FC } from "react";

export const Header: FC<IHeader> = ({ user }) => (
  <Grid className="header" container spacing={2}>
    <Grid item xs={4}>
      <SearchInput />
    </Grid>
    <Grid item xs={4}></Grid>
    <Grid className="header-user" item xs={4}>
      <Character {...user} />
      <UserNotifications />
    </Grid>
  </Grid>
);
