import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { loggedUser } = useAuthContext();

  return <>{loggedUser ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
