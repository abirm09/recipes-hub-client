/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../util/firebase/firebase.config";
export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  //email and pass
  const createUserWithEmailPass = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //google login
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  //github login
  const githubLogin = () => signInWithPopup(auth, githubProvider);
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
    googleLogin,
    githubLogin,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
