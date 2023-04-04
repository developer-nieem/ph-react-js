import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealItem from './MealItem';

const Restaurant = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
        <div >
            <div className='grid grid-cols-2 justify-center gap-6'>
            {
                meals.meals.map(item=> <MealItem meal={item}></MealItem> )
            }
            </div>
        </div>
    );
};

export default Restaurant;