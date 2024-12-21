import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebaseAuth/firebaseAuth";
export const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // create a New Account
  const createAccount = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user Authentication
  const userLogin = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // userSingOut
  const userLogout = () => {
    setLoading(false);
    return signOut(auth);
  };
  // email
  const emailVerification = () => {
    const currentLogin = auth.currentUser; // Get the currently authenticated user
    if (currentLogin) {
      setLoading(true);
      return sendEmailVerification(currentLogin).finally(() =>
        setLoading(false)
      );
    } else {
      alert("No user is currently logged in to send verification email.");
      return Promise.reject("No user is currently logged in.");
    }
  };

  // const emailVerification = (currentUser) => {
  //   const currentLogin = auth.currentUser;
  //   if (currentLogin) {
  //     setLoading(true);
  //     return emailVerification(currentLogin);
  //   }

  //   return sendEmailVerification(auth, currentUser);
  // };
  //  Mange User All Time Authentication
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log(currentUser);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  //  send to context
  const authInfos = {
    user,
    loading,
    createAccount,
    userLogin,
    userLogout,
    emailVerification,
  };
  return (
    <AuthContext.Provider value={authInfos}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
