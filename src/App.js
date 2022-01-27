import Header from 'components/Header';
import avatarImg from "./assets/images/avatar.jpg"
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import { Drawer } from '@mui/material';
import Sidebar from 'components/Sidebar';
import Logo from 'components/Logo';
import Calendar from 'pages/calendar/Calendar';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="inherit"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Header user={{ img: avatarImg, firstName: "Zelto", lastName: "Olinbekov" }} />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Logo />
        <Sidebar drawerWidth />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Calendar />
      </Box>
    </Box>
  );
}
