import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {signIn} =  useContext(AuthContext);

    const loginHandler =  (event) =>{
        event.preventDefault();

        const form =  event.target;
        const email =  form.email.value ;
        const pass =  form.password.value;

        console.log(email, pass);

        signIn(email, pass)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch(error=>{
          console.log(error.message);
        })
    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" mb-10 ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-6">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required

                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>If you have no account please <Link to='/register' className="btn btn-link">Register</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
