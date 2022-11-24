import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import Login from "../component/Login/Login";
import Registration from "../component/Registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      { path: "registration", element: <Registration></Registration> },
    ],
  },
]);
