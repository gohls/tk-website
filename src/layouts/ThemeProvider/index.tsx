import { ThemeProvider as _ThemeProvider } from "@emotion/react";
import { Global } from "./Global";
import { Scheme, createTheme } from "src/styles";
import useScheme from "src/hooks/useScheme";
import React from "react";

const initialState = {
  scheme: "light",
  toggle: (scheme: Scheme) => {},
};

const ThemeContext = React.createContext(initialState);

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [scheme, setScheme] = React.useState("light");

  const toggle = (scheme: Scheme) => {
    setScheme(scheme);
  };

  const theme = createTheme({
    scheme: scheme === "light" ? "light" : "dark",
  });

  return (
    <ThemeContext.Provider value={{ scheme, toggle }}>
      <_ThemeProvider theme={theme}>
        <Global />
        {children}
      </_ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
