import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";
import { Link } from "react-router-dom";


const Login = () => {

const [error , setError ]  =useState('');
const [success , setSuccess] =  useState('')

const auth =  getAuth(app);
  const loginHandler = (event) => {
      event.preventDefault();

      // 

      const form = event.target;
      const email =  form.email.value;
      const pass =  form.password.value;
      console.log(email, pass);

        setError('');

      if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
        setError('please add two boro hater');
        return;
      }else if(!/(?=.*[0-9].*[0-9])/.test(pass)){
        setError('please add two number');
        return;
      }

      signInWithEmailAndPassword(auth, email, pass)
      .then(result => {
        const loggedUser =  result.user;
        console.log(loggedUser);
        setSuccess('Login Done');
        setError('');
      })
      .catch(error => {
        setError(error.message)
      })
  }
  return (
    <div>
      <h2 className="text-center">Please login </h2>
     <form onSubmit={loginHandler} className="container mt-3">
      <div className="form-group mb-3">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password"  required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <p >
        {error}
      </p>
      <p >
        {success}
      </p>

      <p>If you have already account <Link to='/register'>Register</Link></p>
    </form>

    </div>
  );
};

export default Login;
