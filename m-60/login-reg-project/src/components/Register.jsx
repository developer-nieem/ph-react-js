import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const registerHandler =  (event) =>{
        event.preventDefault();

        const form =  event.target;
        const email =  form.email.value ;
        const pass =  form.password.value;
        const name =  form.password.value;

        console.log(email, pass, name);
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" mb-10 ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-6">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={registerHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                If you have Already account {" "}
                <Link to="/login" className="btn btn-link">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
