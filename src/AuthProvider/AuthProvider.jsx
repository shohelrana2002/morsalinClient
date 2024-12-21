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
  // Send Email Verification
  const emailVerification = () => {
    const currentUser = auth.currentUser; // Get the currently authenticated user
    if (currentUser) {
      setLoading(true);
      return sendEmailVerification(currentUser);
      //     .then(() => {
      //       alert("Verification email sent. Please check your inbox.");
      //     })
      //     .catch((error) => {
      //       console.error("Failed to send verification email:", error);
      //     })
      //     .finally(() => setLoading(false));
      // } else {
      //   alert("No user is currently logged in to send a verification email.");
      //   return Promise.reject("No user is currently logged in.");
    }
  };

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
