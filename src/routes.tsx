import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { AdminLayout } from "./layouts/adminLayout";

const Home = React.lazy(() => import("./pages/home/Home"));
const UserManagement = React.lazy(
  () => import("./pages/admin/user-management/UserManagement")
);

const AccountManagement = React.lazy(
  () => import("./pages/admin/account-management/AccountManagement")
);

const Order = React.lazy(() => import("./pages/taxProcessor/TaxProcessor"));

const PurchaseOrder = React.lazy(
  () => import("./pages/purchaseOrder/PurchaseOrder")
);
const SalesOrder = React.lazy(() => import("./pages/salesOrder/SalesOrder"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "order/purchase",
        element: <PurchaseOrder />,
      },
      {
        path: "order/sales",
        element: <SalesOrder />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "account-management",
        element: <AccountManagement />,
      },
    ],
  },
]);
