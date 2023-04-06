import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className=' space-x-3 text-center text-blue-900 font-semibold mt-4'>
               <Link to='/'>Home</Link>
               <Link to='/orders'>Orders</Link>
               <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;