import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <Link to='/'>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Home
                </a>
              </li>
              </Link>
              <Link to='/login'>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Login
                </a>
              </li>
              </Link>
              <Link to='/register'>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Register
                </a>
              </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
