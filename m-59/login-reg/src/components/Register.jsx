import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../firebase.config';
import { Link } from "react-router-dom";

const Register = () => {
  const [error , setError] = useState('');
  const  [success , setSuccess] =  useState('');

  const auth =  getAuth(app);

const formHandler = (event) =>{
 
 
  event.preventDefault();

 
  
      const gmail = event.target.email.value;
      const pass = event.target.password.value;
     
      // setSuccess('');
      setError('');

      if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
        setError('need boro hater');
        return;
      }

  createUserWithEmailAndPassword(auth, gmail , pass)
  .then(result => {
    const logedUser =  result.user;
    console.log(logedUser);
    sendEmailforVerify(user)
    profileNameHandler(user , name)
    event.target.reset();
    setSuccess('User Created successfully ');
    setError('')
    
  })
  .catch(error => {
    console.error(error.message);
    setError(error.message)
  })


}/*  */


const sendEmailforVerify = (user) =>{
  sendEmailVerification(user)
  .then((result) => {
      console.log(result);
      alert('verify your email')
  });
}


const profileNameHandler = (user, name) =>{
  updateProfile(user , {
    displayName: name,
  })
  .then(()=>{
    console.log('username is update');
  })
}
const emailHandler = (event) =>{
  // console.log(event.target.value);
}
const passwordHandler = (event) => {
  // console.log(event.target.value);
}


  return (
    <div>
      

      <form onSubmit={formHandler}>

        <input className='form-control mb-3' type="text"  name='name'  placeholder='Your name' / >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input onChange={emailHandler}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            required
          />
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          onBlur={passwordHandler}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" name="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="text-error">{error}</p>
        <p className="text-success">{success}</p>
        <p>If you have already account <Link to='/login'>Login</Link></p>
        
      </form>
    </div>
    );
};

export default Register;