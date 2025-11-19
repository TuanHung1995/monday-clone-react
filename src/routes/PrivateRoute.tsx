import React from "react";
import { useAuthStore } from "@store/auth.store";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute:  React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} />;
  return children;
}

export default PrivateRoute;
