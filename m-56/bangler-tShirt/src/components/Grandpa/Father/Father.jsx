import React from 'react';
import Myself from './Myself/Myself';
import Brother from './Brother/Brother';
import Sister from './Sister/Sister';

const Father = ({ring}) => {
    return (
        <div className='border border-red-700 p-3'>
            <h2 className='text-center'>father</h2>
            <div className='flex justify-between gap-4 border border-red-700 p-3'>
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;