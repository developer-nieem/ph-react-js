import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase.config';

const Login = () => {

    const auth =  getAuth(app);

    const googleProvider =  new GoogleAuthProvider();


    // google login
    const loginWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error('error.message');
        })
    }
    

    // github login
    const githubProvider =  new GithubAuthProvider()
    const loginWithGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error('error.message');
        })
    }


    // facebook login

    const facebookProvider =  new FacebookAuthProvider()
    const loginWithFacebook = () =>{
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error('error.message');
        })
    }


    return (
        <div>
            <div className='w-75 gap-5 m-auto mt-5 d-flex'>
                <div className='w-50'>
                <form>
                    <input className='form-control mb-3' type="email" name="email" id="" placeholder='Type your email' />
                    <input className='form-control mb-3' type="password" name="email" id="" placeholder='Type password' />
                    <input className='btn btn-primary mb-3' type="button" value="Login " />
                    <p ><small>If you have no account please <Link to='/register'> Register</Link> </small></p>
                </form>
                </div>
                <div className='w-25 pe-3'>
                    <button onClick={loginWithGoogle} className='p-0 bg-white border-0 mb-3'> <img className='img-fluid  rounded-5 ' src="https://i.ibb.co/FJQXf3w/google.jpg" alt="" /> </button>
                    <button onClick={loginWithGithub} className='p-0 bg-white border-0 mb-3'> <img className='img-fluid  rounded-5 ' src="https://i.ibb.co/9r6mZZQ/github.jpg" alt="" /> </button>
                    <button onClick={loginWithFacebook} className='p-0 bg-white border-0 mb-3'> <img className='img-fluid  rounded-5 ' src="https://i.ibb.co/C5F3Mjs/fb.jpg" alt="" /> </button>

                </div>
            </div>
        </div>
    );
};

export default Login;