import { createBrowserRouter } from "react-router-dom";
import { Courses, Home, Login } from "../pages";

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
  }
]);
