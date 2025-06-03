import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "../assets/pages/HomePage";
import LoginPage from "../assets/pages/LoginPage";
import DashboardPage from "../assets/pages/DashboardPage";
import { protectedLoader } from "../auth/protectedLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    loader: protectedLoader,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
