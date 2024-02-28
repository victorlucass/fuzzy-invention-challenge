import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../pages/_layout/app";
import { AuthLayout } from "../pages/_layout/auth";
import { Feed } from "../pages/feed";
import { ProtectedRoute } from "./protected";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
  },
]);
