import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { onAuthStateChangedUser } from "../auth/firebase";

const PrivateRouter = () => {
  const { loggedUser, setLoggedUser } = useAuthContext();

  const [login, setLogin] = useState(false);

  useEffect(() => {
    onAuthStateChangedUser(setLoggedUser);
    setLogin(true);
  }, []);

  return <>{login && (loggedUser ? <Outlet /> : <Navigate to="/login" />)}</>;
};

export default PrivateRouter;
