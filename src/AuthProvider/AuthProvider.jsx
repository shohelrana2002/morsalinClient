import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebaseAuth/firebaseAuth";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // create a New Account
  const createAccount = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  send to context
  const authInfos = {
    createAccount,
  };
  return (
    <AuthContext.Provider value={authInfos}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
