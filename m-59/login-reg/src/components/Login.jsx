import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase.config";


const Login = () => {

  const auth =  getAuth(app);

const formHandler = (event) =>{
  event.preventDefault();

      const gmail = event.target.email.value;
      const pass = event.target.password.value;
      

  createUserWithEmailAndPassword(auth, gmail , pass)
  .then(result => {
    const user =  result.user;
    console.log(user);
  })
  .then(error => {
    console.error(error.message);
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
      </form>
    </div>
  );
};

export default Login;
