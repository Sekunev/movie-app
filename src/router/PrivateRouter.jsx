import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { onAuthStateChangedUser } from "../auth/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../auth/firebase";

const PrivateRouter = () => {
  const { loggedUser, setLoggedUser } = useAuthContext();
  console.log("loggedUser", loggedUser);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    onAuthStateChangedUser(setLoggedUser);
    setLogin(true);
  }, []);

  // useEffect(() => {
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setLoggedUser(user);
  //     setLogin(true);
  //   } else {
  //     // User is signed out
  //     setLoggedUser(false);
  //     setLogin(true);
  //   }
  // });
  //   onAuthStateChangedUser(setLoggedUser);
  //   setLogin(true);
  // }, []);

  return <>{login && (loggedUser ? <Outlet /> : <Navigate to="/login" />)}</>;
};

export default PrivateRouter;
