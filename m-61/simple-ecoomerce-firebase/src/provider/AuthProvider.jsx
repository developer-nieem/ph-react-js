import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext  =  createContext(null)

const AuthProvider = ({children}) => {
             const [user , setUser] = useState(null);
             const [loading, setLoading] = useState(true)


    const auth =  getAuth(app);

    // register
    const signUpUser = (email, pass) =>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, pass);
    }

    // login
    const signInUser = (email, pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
        
    }


    // observer on the Auth object

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    // sign out

    const logOut = () => {
      return  signOut(auth);
    }

    const authInfo = {
        signUpUser,
        signInUser,
        logOut,
        user,
        loading
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