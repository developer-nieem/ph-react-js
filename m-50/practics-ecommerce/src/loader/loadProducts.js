import { getShoppingCart } from "../utilities/fakedb";


const loadProducts = async() =>{
    const fetchProducts =  await fetch('products.json');
    const covertJson =  await fetchProducts.json();

    const storedCard =  getShoppingCart();
    let savedCart =  [];
    for (const id in storedCard) {
       const addedProducts =  covertJson.find(product => product.id === id);

       if (addedProducts) {
        const quantity = storedCard[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts)

       }
    }

    return savedCart;
}

export default loadProducts