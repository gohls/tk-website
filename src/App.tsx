import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";
import { poems } from "./text/poems";
import Poem from "./components/Poem/Poem";
import Cover from "./components/Cover/Cover";
import ScrollSpy from "react-ui-scrollspy";
import { preface } from "./text/preface";
import Preface from "./components/Preface/Preface";
import { poemTitleEncoder } from "./components/common/utils";
import Footer from "./components/Footer/Footer";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import Page from "./components/common/Page";

// const calcFont()

const theme = createTheme({
  palette: {
    primary: {
      main: "#fdf1ec",
    },
    background: {
      default: "#fdf1ec",
    },
  },
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        paragraph: {
          // Some CSS
          fontFamily: "Times New Roman",
          fontSize: "1.2rem",
          "@media (max-width:600px)": {
            fontSize: ".9rem",
          },
          "@media (max-width:470px)": {
            fontSize: ".8rem",
          },
          "@media (max-width:420px)": {
            fontSize: ".7rem",
          },
          "@media (max-width:370px)": {
            fontSize: ".6rem",
          },
        },
        h3: {
          fontSize: "1.2rem",
          margin: "0 0 1rem",
        },
        h4: {
          fontFamily: "Times New Roman",
          fontSize: "1.3rem",
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
          "@media (max-width:470px)": {
            fontSize: ".9rem",
          },
          "@media (max-width:420px)": {
            fontSize: ".7rem",
          },
          "@media (max-width:370px)": {
            fontSize: ".6rem",
          },
          paddingTop: "5%",
        },
        h5: {
          fontFamily: "Times New Roman",
          paddingBottom: "5%",
          opacity: "50%",
          fontSize: "1.1rem",
          "@media (max-width:600px)": {
            fontSize: ".8rem",
          },
          "@media (max-width:470px)": {
            fontSize: ".7rem",
          },
          "@media (max-width:420px)": {
            fontSize: ".6rem",
          },
          "@media (max-width:370px)": {
            fontSize: ".5rem",
          },
        },
      },
    },
    MuiContainer: {},
  },
});

function App() {
  const handleChange = (target: HTMLElement) => {
    var headerOffset = 0;
    var elementPosition = target.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const onPoemLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      handleChange(target);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className='App'>
          <MenuBar />
          <Grid container>
            <Grid
              xs={3}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  backgroundColor: "white",
                },
              }}
            >
              <Box
                className='side-nav'
                // hide on screens smaller than md
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Typography>
                  <b>Table of Contents</b>
                </Typography>
                <Box borderRight={1} sx={{ paddingRight: "10px" }}>
                  <a
                    onClick={(e) => onPoemLinkClick(e)}
                    href={"#section-cover"}
                    className='poem-link'
                  >
                    <div data-to-scrollspy-id={"section-cover"}>{"Cover"}</div>
                  </a>
                  <a
                    onClick={(e) => onPoemLinkClick(e)}
                    href={"#section-preface"}
                    className='poem-link'
                  >
                    <div data-to-scrollspy-id={"section-preface"}>
                      {"Preface"}
                    </div>
                  </a>
                  {poems.map((poem, index) => {
                    return (
                      <a
                        onClick={(e) => onPoemLinkClick(e)}
                        href={`#poem-${poemTitleEncoder(poem.title)}`}
                        className='poem-link'
                      >
                        <div
                          data-to-scrollspy-id={`poem-${poemTitleEncoder(
                            poem.title
                          )}`}
                        >
                          {poem.title}
                        </div>
                      </a>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
            <Grid item xl={6} lg>
              <Container fixed maxWidth={"sm"}>
                <ScrollSpy useBoxMethod={false}>
                  <div id={"section-cover"}>
                    <Cover />
                    <Divider component='div' role='presentation' />
                  </div>
                  <div id={"section-preface"}>
                    <Preface preface={preface} />
                    <Divider component='div' role='presentation' />
                  </div>
                  {poems.map((poem, index) => (
                    <div id={`poem-${poemTitleEncoder(poem.title)}`}>
                      <Poem
                        key={index}
                        author={poem.author}
                        title={poem.title}
                        poem={poem.poemLines}
                      />
                      {index < poems.length && (
                        <Divider component='div' role='presentation' />
                      )}
                    </div>
                  ))}
                </ScrollSpy>
              </Container>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  backgroundColor: "white",
                },
              }}
            ></Grid>
          </Grid>
          <Footer />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
