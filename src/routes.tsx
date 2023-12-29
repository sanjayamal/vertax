import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";

const Home = React.lazy(() => import("./pages/home/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
