import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('Observing Current User', currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const GoogleProvider = new GoogleAuthProvider();

  //Google SignIN
  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
  }
  //LogOut
  const SignOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  // Create User

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // Login User

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }





  const authInfo = { loading, GoogleSignIn, SignOut, createUser, LoginUser, user }
  return (
    <AuthContext.Provider value={(authInfo)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;