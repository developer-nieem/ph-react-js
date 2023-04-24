import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    return (
        <div className='container'>
            <div className='text-center mt-3'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p > <span className='fw-bold'>{moment().format("dddd,")}</span>{moment().format(" MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex bg-light mb-3'>
                <button className='btn btn-success'>Latest</button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text. ..........
                </Marquee>
            </div>

                
        
        </div>
    );
};

export default Header;