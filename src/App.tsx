import useScheme from "./hooks/useScheme";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { ThemeProvider } from "./layouts/ThemeProvider";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [scheme] = useScheme();
  console.log(scheme);
  return (
    <BrowserRouter>
      <ThemeProvider scheme={scheme}>
        <Header fullWidth={false} />
        <Main>
          <AppRouter />
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
