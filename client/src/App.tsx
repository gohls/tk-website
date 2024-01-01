import Header from "./layouts/Header";
import { Main as MainLayout } from "./layouts/Main";
import { ThemeProvider } from "./layouts/ThemeProvider";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./libs/react-query";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Header fullWidth={false} />
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
