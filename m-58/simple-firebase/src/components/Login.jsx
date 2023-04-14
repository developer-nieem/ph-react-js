import React, { useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider  } from "firebase/auth";


const Login = () => {

    const [user , setUser ] = useState(null);

    const auth =  getAuth(app)
    const provider =  new GoogleAuthProvider()

    const googleLogin = () =>{

        signInWithPopup(auth, provider)
        .then(result => {
            const user =  result.user;
                setUser(user)
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const gitProvider = new GithubAuthProvider()
const gitHubLogin = () =>{

    signInWithPopup(auth, gitProvider)
    .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    })
}


    const signOutUser =()=>{
        signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
           
          });
          
    }

    return (
        <div>
           
            {
                user? <button onClick={signOutUser}>signOut</button>:  <div>
                    <button onClick={googleLogin}>Google login</button>
                    <button onClick={gitHubLogin}>Github login</button>
                </div>
            }
            { user && <div>
                    <h1>{user.displayName}</h1>
            </div>
                
            }
        </div>
    );
};

export default Login;