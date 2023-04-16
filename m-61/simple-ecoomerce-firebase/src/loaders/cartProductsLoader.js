import { getShoppingCart } from "../utilities/fakedb";


const cartProductsLoader = async() =>{
    const loadProducts =  await fetch('products.json');
    const products=  await loadProducts.json();
    
    const storedCart =  getShoppingCart();
            let saveCart =  [];
    for (const id in storedCart) {
        const addProducts =  products.find(product => product.id === id);
        if(addProducts){
            const quantity =  storedCart[id];
            addProducts.quantity = quantity;
            saveCart.push(addProducts)
        }
    }
    return saveCart;
}

export default cartProductsLoader;