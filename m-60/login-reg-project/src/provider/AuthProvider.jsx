import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext =  createContext(null);
const auth = getAuth(app) ;

const AuthProvider = ({children}) => {
const [users , setUsers] =  useState(null);
const [ loading , setLoading] =  useState(true)


const createUser =  (email, pass) =>{
   return createUserWithEmailAndPassword(auth , email, pass)
}

const signIn =(email , pass) =>{
    return signInWithEmailAndPassword(auth, email, pass);
}

const logOut = () =>{
    return signOut(auth);
}
useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        console.log('current user' , currentUser);
        setUsers(currentUser);
        setLoading(false)
    })

    return () =>{
        unsubscribe()
    }
} ,[])


const authInfo = {
    users,
    createUser,
    signIn,
    logOut,
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