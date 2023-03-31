import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Main = ({addMeal}) => {
    const [meals, setMeals] =useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res=> res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
           {
            meals.map(singleMeal => <SingleMeal 
                singleMeal ={singleMeal}
                addMeal={addMeal}
                ></SingleMeal>)
           }
        </div>
    );
};

export default Main;