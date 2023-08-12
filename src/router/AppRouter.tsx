import { createBrowserRouter } from "react-router-dom";
import { NavBar } from "../components";
import { AddCourse, Courses, Delivery, Home, Login, NotFound } from "../pages";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        // loader: "aquí importamos el fetch de los cursos"
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
    ],
  },
]);
