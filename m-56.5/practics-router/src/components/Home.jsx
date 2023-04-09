import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <div className='text-center pt-16 pb-44 bg-zinc-100'>
                <h1 className='text-4xl font-bold title-text'>Welcome To HeroGadget</h1>
                <p className='pt-5 mb-6'>
                Best E-commerce platform for buying high quality Smart Home <br />  Appliances at extremely affordable Price.
                </p>
               <Link to='/shop'> <button className='btn btn-accent bg-slate-300 rounded-full shadow-md mr-2'>Shop Now </button></Link>
              <Link to='/about'>
              <button className='btn btn-accent rounded-full shadow-md'>Learn More </button>
              </Link>
            </div>
            <div className='w-8/12 m-auto -mt-32'>
                <img className='w-100 rounded-sm' src="https://i.ibb.co/cFZQPX1/hero-bf3d5e6d.jpg " alt="" />
            </div>
        </div>
    );
};

export default Home;