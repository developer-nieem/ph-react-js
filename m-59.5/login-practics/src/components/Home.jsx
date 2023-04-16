import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className='row align-items-center mt-5'>
                    <div className="col-md-8">

                            <div className='w-50 '>
                                <form>
                                    <input className='form-control mb-3' type="email" name="email" id="" placeholder='Type your email' />
                                    <input className='form-control mb-3' type="password" name="email" id="" placeholder='Type password' />
                                    <input className='btn btn-primary mb-3' type="button" value="Login " />
                                    <p ><small>If you have no account please <Link to='/register'> Register</Link> </small></p>
                                </form>

                                <div  className=' d-flex gap-3  justify-content-center align-content-center '>
                                   <a> <img className='w-100 mb-3' src="https://i.ibb.co/FJQXf3w/google.jpg" alt="" /> </a>
                                   <a> <img className='w-100 mb-3' src="https://i.ibb.co/9r6mZZQ/github.jpg" alt="" /> </a>
                                   <a> <img className='w-100 mb-3' src="https://i.ibb.co/C5F3Mjs/fb.jpg" alt="" /> </a>
                                </div>
                            </div>

                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg" alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Home;