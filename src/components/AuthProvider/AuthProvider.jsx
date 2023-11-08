import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebaseConfig/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observe auth state change
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //     setLoading(false)
    //         setUser(currentUser)
    //     })
    //     return () => {
    //         unSubscribe()
    //     }
    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          const userEmail = currentUser?.email || user?.email;
          setUser(currentUser);
          setLoading(false);
          const loggedUser = { email: userEmail };
          const url = "http://localhost:5000/jwt";
          console.log('req sent')
          if (currentUser) {
            axios
              .post(url, loggedUser, {
                withCredentials: true,
              })
              .then((res) => console.log(res.data));
          } else {
            axios
              .post("http://localhost:5000/logout", loggedUser, {
                withCredentials: true,
              })
              .then((res) => console.log("cookie cleared", res.data));
          }
        });
        return () => {
          unsubscribe();
        };
      }, [user?.email]);



    const authInfo = { user, logOut, loading, signInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;