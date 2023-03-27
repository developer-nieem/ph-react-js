import React from 'react';
import logo from'../../images/Logo.svg'
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
                                <a className="nav-link active text-white" aria-current="page" href="#">Order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Order Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Manage Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;