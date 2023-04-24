import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const logoutHandler= ()=>{
        logOut()
        .then(() => {
            
        })
        .catch(error=> {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className='text-center'>
                {
                    user && <div>
                        <h2>Your name: {user.displayName? user.displayName:'not set yet'}</h2>
                        <p className='fs-2'>Your Email: {user.email}</p>
                    </div>
                }
                {
                    user ? <button onClick={logoutHandler} className='btn btn-danger'>Log Out</button> :  <Link className='btn btn-success ' to='/login'>Login</Link> 
                }
            </div>
        </div>
    );
};

export default Profile;