import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { LoginContext } from "./context/UserContext";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "./theme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <LoginContext>
          <RouterProvider router={routes} />
        </LoginContext>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
