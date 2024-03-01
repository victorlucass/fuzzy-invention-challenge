import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../pages/_layout/app";
import { LoginLayout } from "../pages/_layout/login";
import { Feed } from "../pages/feed";
import { ProtectedRoute } from "./protected";
import { Welcome } from "../pages/welcome";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/feed",
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
    element: <LoginLayout />,
  },
]);
