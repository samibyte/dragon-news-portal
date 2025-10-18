import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>newslayout</h1>,
  },
  {
    path: "/authentic",
    element: <h1>authlayoutlayout</h1>,
  },
  {
    path: "*",
    element: <h1>error 404</h1>,
  },
]);

export default router;
