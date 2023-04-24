import React from 'react';
import HeaderBottom from '../Pages/Shared/HeaderBottom';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <HeaderBottom></HeaderBottom>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;