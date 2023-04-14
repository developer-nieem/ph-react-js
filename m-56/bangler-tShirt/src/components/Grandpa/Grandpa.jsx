import React, { createContext, useState } from 'react';
import Father from './Father/Father';
import Uncle from './Uncle/Uncle';
import Aunty from './Aunty/Aunty';

export const  ringAnother = createContext('dimond')
export const mobile = createContext('iphone')
export const payment =  createContext(0)
const Grandpa = () => {
    const ring = 'gold'

    const [money, setMoney] =  useState(0)
    return (
        <div className='w-96 m-auto border-2 border-blue-600'>
            <h2 className='text-4xl text-center'>Grandpa</h2>
           <p>dadar tk : {money}</p>
           <ringAnother.Provider value='gloden agdi'>
            <div className='flex  justify-around'> 
                <Father ring={ring}></Father>
                <mobile.Provider value='Oppo'>
                     <Uncle></Uncle>
                </mobile.Provider>
                
                <payment.Provider value={[money, setMoney]}>
                <Aunty></Aunty>
                </payment.Provider>
                </div>
           </ringAnother.Provider>
        </div>
    );
};

export default Grandpa;