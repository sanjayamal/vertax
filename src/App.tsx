import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, PurchaseOrder, SalesOrder } from "./components";
import { MainLayout } from "./layouts/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/order",
    element: <MainLayout />,
    children: [
      {
        path: "sales",
        element: <SalesOrder />,
      },
      {
        path: "purchase",
        element: <PurchaseOrder />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
