import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const Login = () => {

  const {signInUser} =  useContext(AuthContext)

  const loginHandler = (event) => {
    event.preventDefault();
      const form =  event.target;
      const email =  form.email.value;
      const pass =  form.password.value;
    
      console.log(email, pass );

      signInUser(email, pass)
      .then(result=> {
        const loggedUser =  result.user
      console.log(loggedUser);
      })
      .catch(error=> {
        console.log(error.message);
      })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-pink-400">
            <div className="text-center ">
              <h1 className="text-3xl font-bold">Login now!</h1>
            </div>
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
                <p className="text-xs mt-3">
                  New to Ema-Johan?
                  <Link to="/register" className="text-orange-500">
                     Create New Account
                  </Link>
                </p>
              </div>
            </form>

                    <div className="text-center">
                    
                    <div className="divider">OR</div>
                    
                        <button className="btn btn-wide ">
                       
                             Continue with Google
                             </button>
                        
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
