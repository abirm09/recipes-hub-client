/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const data = {
    name: "Abir",
    user,
    setUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
