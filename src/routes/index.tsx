import { Route, Routes } from "react-router-dom";
import About from "src/pages/About";
import Detail from "src/pages/Detail";
import PageError from "src/pages/Error";
import Home from "src/pages/Home";
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
    element: <PageError />,
    title: "error",
  },
];

const Router = () => {
  const pageRoutes = pages.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
