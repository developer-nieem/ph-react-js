import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('')

  const {signUpUser} = useContext(AuthContext)

  const registerHandler = (event) =>{
      event.preventDefault();

      
      const form =  event.target;
      const email =  form.email.value;
      const pass =  form.password.value;
      const confirmPass =  form.confirm.value;
      console.log(email, pass , confirmPass);

      if (pass !== confirmPass) {
        setError('Password not matched')
      }

      signUpUser(email, pass)
      .then(result => {
        const user =  result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error.message);
      })

  }

    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-pink-400">
            <div className="text-center ">
              <h1 className="text-3xl font-bold">Sign Up</h1>
            </div>
            <form onSubmit={registerHandler} className="card-body">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  name="confirm"
                  required
                />
               <p className='text-error text-center'><small>{error}</small></p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                <p className="text-xs mt-3 text-center">
                Already have an account?{" "}
                  <Link to="/login" className="text-orange-500">
                    Login
                  </Link>{" "}
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

export default Register;