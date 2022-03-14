import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const RequireAuth = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
