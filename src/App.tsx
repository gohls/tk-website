import { useMemo, useState } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { ThemeProvider } from "./layouts/ThemeProvider";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import useScheme from "./hooks/useScheme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header fullWidth={false} />
        <Main>
          <AppRouter />
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
