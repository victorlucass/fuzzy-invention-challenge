import { NavLink, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderContent } from "./styled";
import { House, SignOut } from "@phosphor-icons/react";

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.removeItem("credential");
    navigate("/login");
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Fuzzy Invention Challenge</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <NavLink to="/">
            <House size={32} />
          </NavLink>
          <a onClick={handleLogout}>
            <SignOut size={32} />
          </a>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
