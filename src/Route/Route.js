import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import Login from "../component/Login/Login";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Registration from "../component/Registration/Registration";
import Shipping from "../component/Shipping/Shipping";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      {
        path: "shipping",
        element: (
          <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        ),
      },
      { path: "registration", element: <Registration></Registration> },
    ],
  },
]);
