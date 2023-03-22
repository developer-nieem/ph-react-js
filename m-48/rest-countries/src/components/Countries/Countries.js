import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    return (
        <div>
           {
            countries.map(country => <li>{country.name.common}</li>)
            }
        </div>
    );
};

export default Countries;