import { useState } from 'react'
import './App.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.config';

function App() {
const [user, setUser] = useState(null)
const auth =  getAuth(app);
const googleProvider =  new GoogleAuthProvider();

const googleLogin = () => {
  signInWithPopup(auth, googleProvider)
  .then(result => {
    const user =  result.user;
    console.log(user);
    setUser(user)
  })
  .then(error => {
    console.log(error.message);
  })
}

const gitProvider =  new GithubAuthProvider();
const githubLogin = () =>{
  signInWithPopup(auth , gitProvider)
  .then(result => {
    const user =  result.user;
    setUser(user)
    console.log(user);
  })
  .then(error => {
    console.log(error.message);
  })
}

const signoutLogin = () =>{

  signOut(auth).then(() => {
    setUser(null)
  }).catch((error) => {
   console.log(error);
  });
  
}

  return (
    <div className="App">
      
      <h1>Login with third Party app</h1>
      {
        user ? <button onClick={signoutLogin}>Sign Out</button> : <div>
                 <button onClick={googleLogin}>Google login</button>
                <button onClick={githubLogin}> Github login </button>
        </div>
      }
   

      {
          user && <div>
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
      }
    </div>
  )
}

export default App
