import { Route, Routes } from "react-router-dom";
import About from "src/pages/About";
import PoemDetail from "src/pages/Detail";
import PageError from "src/pages/Error";
import Poem from "src/pages/Poem";
import { routerType } from "src/types";

const pages: routerType[] = [
  {
    title: "poem",
    path: "",
    element: <Poem />,
  },
  {
    title: "poem",
    path: ":poemId",
    element: <PoemDetail />,
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
