import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/Main";

export function AppLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
