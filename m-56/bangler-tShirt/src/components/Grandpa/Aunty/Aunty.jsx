import React, { useContext } from 'react';
import { payment } from '../Grandpa';

const Aunty = () => {
    const [money, setMoney] =  useContext(payment)
    return (
        <div>
            <h2>Aunty</h2>
            <button onClick={()=> setMoney(money + 100)} className='bg-red-800'>
                click
            </button>
        </div>
    );
};

export default Aunty;