import { NavLink } from "react-router-dom";

export function Welcome() {
  return (
    <div>
      <h1>Muito Bem-Vindo ao Fuzzy Invention Challenge</h1>
      <span>
        Acesse o feed <NavLink to="/feed">aqui</NavLink>
      </span>
    </div>
  );
}
