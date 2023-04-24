import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';
const HeaderBottom = () => {
    return (
        <div>
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
                                <p><Nav.Link > <Link to='/profile'> <FaUserCircle className='fs-1 text-black'></FaUserCircle> </Link> </Nav.Link></p>
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

export default HeaderBottom;