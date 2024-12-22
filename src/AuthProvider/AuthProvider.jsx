import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebaseAuth/firebaseAuth";
export const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
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
  // userSingOut
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Send Email Verification
  const emailVerification = () => {
    const currentUser = auth.currentUser; // Get the currently authenticated user
    if (currentUser) {
      setLoading(true);
      return sendEmailVerification(currentUser);
    }
  };
  // forget password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // google lOgin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //  Mange User All Time Authentication
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLoading(false);
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
    forgetPassword,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfos}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
