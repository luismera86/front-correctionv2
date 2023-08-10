import { createBrowserRouter } from "react-router-dom";
import { AddCourse, Courses, Delivery, Home, Login } from "../pages";
import { App } from "../App";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/admin/addCourse",
    element: <AddCourse />,
  },
  {
    path: "/admin/delivery",
    element: <Delivery />,
  },
]);
