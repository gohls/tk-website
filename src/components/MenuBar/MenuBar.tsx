import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function MenuBar() {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant='h6' color='inherit' component='div'>
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;
