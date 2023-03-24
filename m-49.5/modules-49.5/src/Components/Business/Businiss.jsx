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

function Mans({picture,name, company, email, balance,_id}){
    const addToCart =(id)=>{
        console.log('added Item', id);
    }
    return (
        <div style={{border: '2px solid ', margin:"15px", padding:"15px"}}>
            <img src={picture} alt="" srcset="" />
            <h3>Name : {name}</h3>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
            <p>Earn : {balance}</p>
            <button onClick={() => addToCart(_id)}>Add to Cart</button>
        </div>
    )
}
export default Businiss;