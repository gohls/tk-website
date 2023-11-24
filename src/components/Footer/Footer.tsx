import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          // mt: 2,
          paddingTop: 1,
        }}
      >
        <Typography variant="caption" color="initial">
          ©2023 Tom Kuhn. All Rights Reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          my: 1,
        }}
      >
        <Typography variant="caption" color="initial">
          Website created by{" "}
          <a
            href="https://www.linkedin.com/in/sagohl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Simon Gohl
          </a>
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
