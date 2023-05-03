import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Home/Blog/Blog";
import Chef from "../../Pages/Home/Chef/Chef";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chefs/all"),
        // fetch("https://recipes-hub-server-abirm09.vercel.app/chefs/all"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/chef/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
        element: (
          <PrivateRoute>
            <Chef />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
