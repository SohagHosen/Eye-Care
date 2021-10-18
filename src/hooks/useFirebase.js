import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initFirebase from "../firebase/initFirebase";

initFirebase();
function useFirebase() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName) {
          setUser(user);
          setLoading(false);
        } else {
          setUser({});
          setLoading(false);
        }
      } else {
        setUser({});
        setLoading(false);
      }
    });
  }, []);
  return {
    user,
    setUser,
    googleSignIn,
    logOut,
    createUser,
    signIn,
    loading,
    setLoading,
  };
}

export default useFirebase;
