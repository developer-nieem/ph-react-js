import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories , setCategories] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:3000/category')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    console.log(categories);
    return (
        <div>
            <h3>All Caterogy</h3>
            {
                categories.map(category => <p><NavLink className='text-decoration-none ms-4 fw-bold' to={`category/${category.id}`} key={category.id}>{category.name}</NavLink></p> )
            }
        </div>
    );
};

export default LeftNav;