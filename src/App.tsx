import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { LoginContext } from "./context/UserContext";

export function App() {
  return (
    <>
      <LoginContext>
        <RouterProvider router={routes} />
      </LoginContext>
    </>
  );
}
