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
        let shopingCart = {};

        const storedCart = localStorage.getItem('shopping-cart')
        if(storedCart){
            shopingCart = JSON.parse(storedCart)
        }

        const qty = shopingCart[id];
        if(qty){
            const itemPlus = parseInt(qty) + 1;
            shopingCart[id] = itemPlus
        }else{
            shopingCart[id] = 1;
        }

        localStorage.setItem('shopping-cart', JSON.stringify(shopingCart))
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