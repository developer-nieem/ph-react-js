import React, { useEffect, useState } from 'react';
import app from '../firebase.congig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import { useNavigation } from 'react-router-dom';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
   
   

         const auth = getAuth(app);

        //  register
         const registerUser = (email, pass) =>{
                 return  createUserWithEmailAndPassword(auth , email, pass);
         }

        //  login
        const loginUser = (email, pass) =>{
            setLoading(true)
            return  signInWithEmailAndPassword(auth , email, pass);
            
    }

    // google login
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = ()=>{
            return signInWithPopup(auth, googleProvider);
    }
    // user profile
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        } 
    },[])
  
    // LogOut 

    const logOut =()=>{
       return signOut(auth);
    }

const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    loginWithGoogle,
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