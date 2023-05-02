import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Home/Blog/Blog";
import Chef from "../../Pages/Home/Chef/Chef";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://recipes-hub-server.vercel.app/chefs/all"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/chef/:id",
        loader: ({ params }) =>
          fetch(`https://recipes-hub-server.vercel.app/chef/${params.id}`),
        element: <Chef />,
      },
    ],
  },
]);
