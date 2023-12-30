import Header from "./layouts/Header";
import { Main as MainLayout } from "./layouts/Main";
import { ThemeProvider } from "./layouts/ThemeProvider";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header fullWidth={false} />
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
