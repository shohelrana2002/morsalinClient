import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebaseAuth/firebaseAuth";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // create a New Account
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user Authentication
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  send to context
  const authInfos = {
    user,
    loading,
    createAccount,
    userLogin,
  };
  return (
    <AuthContext.Provider value={authInfos}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
