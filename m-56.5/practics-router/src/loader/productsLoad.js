import { getShoppingCart } from "../utilitis/fakeDB";

export  const productsLoadData = async() =>{
    const fetchData =  await fetch('products.json');
    const data =  await fetchData.json();
    

    const savedCart =  getShoppingCart();
    let initialCart = [];
    for (const id in savedCart) {
        const addedProducts =  data.find(pd=> pd.id  === id);

        if(addedProducts){
            const quantity =  savedCart[id];
            addedProducts.quantity =  quantity;
            initialCart.push(addedProducts)
        }
    }


    return {data, initialCart};
}