import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <h2>Fuzzy Invention Challenge</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/login">sair</NavLink>
      </div>
    </HeaderContainer>
  );
}
