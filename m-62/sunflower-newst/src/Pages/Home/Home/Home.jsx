import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/RightNav/RightNav';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

const Home = () => {
  const {user} = useContext(AuthContext);
  
    return (
      <>
        <Header></Header>
        <Container>
          <Row>
            <Col lg={3}> { <LeftNav></LeftNav> } </Col>
            <Col lg={6}>
            <Outlet></Outlet>
            </Col>
            <Col lg={3}>{<RightNav></RightNav>}</Col>
          </Row>
        </Container>
        <Footer></Footer>
        </>
      );
    
};

export default Home;