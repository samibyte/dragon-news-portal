import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
