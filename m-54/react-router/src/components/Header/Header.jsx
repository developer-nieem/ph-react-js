import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <ul className='menu-bar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/users">Users </Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/posts">Post</Link></li>
            </ul>
        </div>
    );
};

export default Header;