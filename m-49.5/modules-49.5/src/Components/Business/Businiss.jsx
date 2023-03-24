import React, { useEffect, useState } from 'react';


const Businiss = () => {
    const [business, setBusiness] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBusiness(data))
    },[])
   
    return (
        <div>
            {
                 business.map(man =><Mans {...man}></Mans> )
            }
            

        </div>
    );
};

function Mans({picture,name, company, email, balance}){
    return (
        <div>
            <img src={picture} alt="" srcset="" />
            <h3>Name : {name}</h3>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
            <p>Earn : {balance}</p>
        </div>
    )
}
export default Businiss;