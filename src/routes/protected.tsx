import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = window.localStorage.getItem("credential");
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};
