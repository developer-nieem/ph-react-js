import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext  =  createContext(null)

const AuthProvider = ({children}) => {
             const [user , setUser] = useState(null)
    const auth =  getAuth(app);

    // register
    const signUpUser = (email, pass) =>{
      return  createUserWithEmailAndPassword(auth, email, pass);
    }

    // login
    const signInUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass);
        
    }

    // sign up

    const logOut = () => {
      return  signOut(auth);
    }

    const authInfo = {
        signUpUser,
        signInUser,
        logOut
    }

    return (
        <div>
            
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;