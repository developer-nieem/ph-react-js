import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const {registerUser} = useContext(AuthContext)

    const registerHandler = (event) =>{
            event.preventDefault();

            const form = event.target;
            const email = form.email.value;
            const pass = form.password.value;

            registerUser(email, pass)
            .then(result=> {
                const user = result.user;
                console.log(user);
            })
            .catch(error=> {
                console.log(error.message);
            })

    }

    return (
        <div className='w-75 m-auto mt-5 shadow-lg p-4'>
        <h3 className='text-center fs-5'>Register your account</h3>
        <form onSubmit={registerHandler}>
            <div className="mb-3 mt-4">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password' required />
            </div>
           
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <p className='mt-3 text-center'>You Have An Account ? <Link to='/login'>Login</Link> </p>
        </form>
    </div>
    );
};

export default Register;