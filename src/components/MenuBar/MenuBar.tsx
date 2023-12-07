import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import signature from "../../Tom-Kuhn--signature.png";
import { Link } from "react-router-dom";

function MenuBar() {
  const navItems = ["Home", "About", "Contact"];

  return (
    <div className="App">
      <AppBar
        position="absolute"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="toolbar" variant="dense">
          <img
            className="image"
            src={signature}
            alt="Tom Kuhn signature"
            width="100"
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to={`about`}>
              <Button sx={{ color: "black" }}>About</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;
