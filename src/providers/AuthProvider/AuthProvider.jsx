/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../util/firebase/firebase.config";
export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  //email and pass
  const createUserWithEmailPass = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const data = {
    user,
    setUser,
    createUserWithEmailPass,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
