import React, { useEffect, useState } from 'react';
import { deleteMealItem, getShoppingCart } from '../../../utilities/fakedb';

const Sidebar = ({meal}) => {
    // console.log(meal.strMeal);
    const [cart, setCart] =useState([]);

   
   useEffect(()=>{
    const getMeal = getShoppingCart()
    let mealName = []
    for (const name in getMeal) {
        // console.log(name);
         mealName.push(name)
    }
    setCart(mealName);
   },[meal])

        
    return (
        <div className='sticky-top card'>
           <h4 className='mb-4'>Selected meal Item:</h4>
            {
               cart.map(name=> <p>{name}</p>) 
            }
            
            <button onClick={()=> {
    deleteMealItem()
    setCart([])
            }} className='btn btn-success'>Clear Meal </button>
        </div>
    );
};

export default Sidebar;