import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <ul className='menu-bar'>
                <li><ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/about">About </ActiveLink></li>
                <li><Link to="/users">Users </Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/posts">Post</Link></li>
            </ul>
        </div>
    );
};

export default Header;