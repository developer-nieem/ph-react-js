import React from 'react';
import { setShoppingCart } from '../../utilities/setCart';

const styles = {
    border: '2px solid blue',
    margin: '20px',
    padding: '20px'
}
const Persion = ({name,age,company,email,balance, id}) => {
    const addToCart = (id) =>{
        
        setShoppingCart(id)
    }
    return (
        <div style={styles}>
            <h3>Name : {name}</h3>
            <p>Age : {age}</p>
            <p>Company : {company}</p>
            <p>Email : {email}</p>
            <p>Earn : <u>{balance}</u></p>
            <button onClick={()=> addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Persion;