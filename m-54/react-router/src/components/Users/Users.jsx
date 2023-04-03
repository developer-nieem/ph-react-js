import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const data =  useLoaderData();
    return (
        <div>
            <h1>User data</h1>
            {
                data.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Users;