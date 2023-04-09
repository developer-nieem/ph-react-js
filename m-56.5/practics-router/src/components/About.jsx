import React from 'react';

const About = () => {
    return (
        <div className='bg-gray-50 min-h-[calc(100vh-150px)]'>
           <div className='text-center  py-8'>
            <h2 className='text-4xl font-bold pt-8'>Help Center</h2>
            <div className="form-control w-52 m-auto mt-3">
            <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
           </div>
           <div className='grid grid-cols-3 gap-24 w-3/4 m-auto'>
                <div>Billing</div>
                <div>Billing</div>
                <div>Billing</div>
                <div>Billing</div>
                <div>Billing</div>
                <div>Billing</div>
           </div>
        </div>
    );
};

export default About;