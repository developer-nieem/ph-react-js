import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    console.log(user);
    const {id, name , phone , email} = user
    return (
        <div className='data-user'>
            <h1>{name}</h1>
            <h2>Email: {email}</h2>
            <p>Phone {phone}</p>
            <Link to={ `/user/${id}`}>details</Link>
        </div>
    );
};

export default User;