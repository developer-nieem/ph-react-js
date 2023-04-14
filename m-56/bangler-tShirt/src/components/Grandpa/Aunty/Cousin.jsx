import React, { useContext } from 'react';
import { mobile } from '../Grandpa';

const Cousin = () => {
    const phone = useContext(mobile)
    return (
        <div className='flex gap-3'>
            <h2>cousin</h2>
            <h2>{phone}</h2>
        </div>
    );
};

export default Cousin;