import React, { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
        const [meal, setMeal] =useState('')
    
        const addMeal = (meal) =>{
        setMeal(meal.strMeal)
        // addToDb(meal.idMeal)
        addToDb(meal.strMeal)
    }
    return (
        <div className='row pt-5 px-2'>
            <div className='col-md-9'>
                <Main addMeal={addMeal}></Main>
            </div>
            <div className='col-md-3'>
            <Sidebar meal={meal}></Sidebar>
            </div>
        </div>
    );
};

export default Home;