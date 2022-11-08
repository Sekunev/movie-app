// import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
// import { auth } from "../auth/firebase";
import { onAuthStateChangedUser } from "../auth/firebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("");

  // console.log(loggedUser);

  useEffect(() => {
    onAuthStateChangedUser(setLoggedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

//! Consuming Custom Hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
