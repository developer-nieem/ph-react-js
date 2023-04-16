import React, { createContext, useState } from 'react';
import app from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext =  createContext(null);
const auth = getAuth(app) ;

const AuthProvider = ({children}) => {
const [users , setUsers] =  useState(null);

const createUser =  (email, pass) =>{
   return createUserWithEmailAndPassword(auth , email, pass)
}

const signIn =(email , pass) =>{
    return signInWithEmailAndPassword(auth, email, pass);
}
const authInfo = {
    createUser,
    signIn,
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