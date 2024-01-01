import { Route, Routes, useRouteError } from "react-router-dom";
import Home from "src/pages/Home";
import About from "src/pages/About";
import Detail from "src/pages/Detail";
import Error from "src/pages/Error";
import { routerType } from "src/types";

const pages: routerType[] = [
  {
    title: "home",
    path: "",
    element: <Home />,
  },
  {
    title: "poem",
    path: ":poemId",
    element: <Detail />,
  },
  {
    title: "about",
    path: "about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
    title: "error",
  },
];

const Router = () => {
  const pageRoutes = pages.map(
    ({ path, title, element, error }: routerType) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    }
  );

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
