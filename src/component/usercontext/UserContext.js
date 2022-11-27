import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import React from "react";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setloading(false);
    });
    return unsubscriber;
  }, []);

  const authInfo = { user, loading, SignOut, createUser, signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
