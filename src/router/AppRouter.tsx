import { createBrowserRouter } from "react-router-dom";
import { AddCourse, Courses, Home, Login } from "../pages";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  }
]);
