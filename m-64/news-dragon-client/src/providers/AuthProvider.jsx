import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] =  useState(null);
    const [loading , setLoading] =  useState(true);

    const auth = getAuth(app)

    
// create user
const createUser = (email, pass) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, pass)
}

// sign in user
const signInUser = (email, pass) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass)
}

//  update profile 
const updateUserProfile =  (name, photo) =>{
    return updateProfile(auth.currentUser, {displayName : name , photoURL: photo})
}

// user observers 

useEffect(()=>{
  const unsubscribe =   onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser);
        setLoading(false)
    })

    return ()=>{
        unsubscribe()
    }
},[])


// logout

const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;