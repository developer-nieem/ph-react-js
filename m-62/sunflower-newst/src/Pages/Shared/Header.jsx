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

            <div>
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
                       
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Link to='/'><Nav.Link href="#features">Home</Nav.Link></Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                                
                            </Nav>
                            <Nav className='d-flex align-content-center'>
                                <p><Nav.Link > <Link to='/profile'>Profile</Link> </Nav.Link></p>
                                <Nav.Link >
                                  <Link to='/login'> <Button variant="success">Login</Button></Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;