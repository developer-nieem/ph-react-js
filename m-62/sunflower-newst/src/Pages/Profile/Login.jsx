import React, { useContext } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    
    const {loginUser} = useContext(AuthContext)
   const navigate = useNavigate();

   const location = useLocation();
   console.log(location);

   const from =  location.state?.from?.pathname || '/';

    const registerHandler = (event) =>{
            event.preventDefault();

            const form = event.target;
            const email = form.email.value;
            const pass = form.password.value;

            loginUser(email, pass)
            .then(result=> {
                const user = result.user;
                console.log(user);
                navigate(from , {replace:true})
            })
            .catch(error=> {
                console.log(error.message);
            })

    }

    return (
        <div className='w-75 m-auto mt-5 shadow-lg p-4'>
            <h3 className='text-center'>Login Your Account</h3>
            <form onSubmit={registerHandler}>
                <div className="mb-3 mt-4">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className='mt-3'>Dont't Have An Account ? <Link to='/register'>Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;