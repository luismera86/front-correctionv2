import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);
