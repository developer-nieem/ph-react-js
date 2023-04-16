import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Login from '../components/Login';

const PrivateRoute = ({children}) => {

    const {users, loading} =  useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (users) {
        return children
    }
    
    return <Login></Login>
};

export default PrivateRoute;