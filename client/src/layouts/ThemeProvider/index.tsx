import React from "react";
import { ThemeProvider as _ThemeProvider } from "@emotion/react";
import { Global } from "./Global";
import { Scheme, createTheme } from "src/styles";

const initialState = {
  scheme: "light",
  toggle: (scheme: Scheme) => {},
};

const ThemeContext = React.createContext(initialState);

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [scheme, setScheme] = React.useState(initialState.scheme);

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
