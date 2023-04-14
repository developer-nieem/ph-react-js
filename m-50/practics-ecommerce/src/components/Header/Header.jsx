import React from 'react';
import logo from'../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black px-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                            <li className="nav-item ">
                                
                                <Link className="nav-link text-white" to='/shop'>Shop</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link text-white" to='/orders'>Order Review</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link text-white" to='/inventory'>Manage Inventory </Link>
                            </li>
                           <Link className="nav-link text-white" to='/login'> LogIn</Link>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;