import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AppRouter } from "./router/AppRouter";
import { AdminContextProvider } from "./pages/admin/context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdminContextProvider>
      <RouterProvider router={AppRouter} />
    </AdminContextProvider>
  </React.StrictMode>
);
