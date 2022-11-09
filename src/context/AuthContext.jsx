// import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
// import { auth } from "../auth/firebase";
import { onAuthStateChangedUser } from "../auth/firebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("");
  const [loading, setLoading] = useState(false);

  const values = { loggedUser, loading, setLoading };

  useEffect(() => {
    onAuthStateChangedUser(setLoggedUser, setLoading);
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

//! Consuming Custom Hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
