import { Route, Routes } from "react-router-dom";
import About from "src/components/About/About";
import PoemDetail from "src/pages/Detail";
import PageError from "src/pages/Error";
import Feed from "src/pages/Feed";
import { routerType } from "src/types";

const pages: routerType[] = [
  {
    title: "feed",
    path: "",
    element: <Feed />,
  },
  {
    title: "about",
    path: "about",
    element: <About />,
  },
  {
    title: "poem",
    path: ":poemId",
    element: <PoemDetail />,
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
