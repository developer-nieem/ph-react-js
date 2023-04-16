import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <div className='w-25 m-auto mt-5'>
                <form>
                    <input className='form-control mb-3' type="email" name="email" id="" placeholder='Type your email' />
                    <input className='form-control mb-3' type="password" name="email" id="" placeholder='Type password' />
                    <input className='btn btn-primary mb-3' type="button" value="Register " />
                    <p ><small>You have already account please login <Link to='/login'> Login</Link> </small></p>
                </form>
            </div>
        </div>
    );
};

export default Register;