import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub , FaFacebookF , FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const RightNav = () => {

    const {loginWithGoogle} = useContext(AuthContext);
    const googleLoginHandler = () =>{
        loginWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>

            <h3>Login With</h3>
            <button onClick={googleLoginHandler} className='btn btn-outline-primary mb-3 w-100'> <FaGoogle></FaGoogle> Login with google</button>
            <button className='btn btn-outline-primary w-100 mb-4'> <FaGithub></FaGithub> Login with google</button>

            <h3>Find Us on</h3>
            <div>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='bg-light mt-4 p-3'>
                <h3>Q-Zone</h3>
                <img className='img-fluid' src={qZone1} alt="" />
                <img className='img-fluid' src={qZone2} alt="" />
                <img className='img-fluid' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;