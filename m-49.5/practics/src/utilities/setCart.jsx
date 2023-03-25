
const setShoppingCart = (id) => {
    
    let shoppingCart = {}

        const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    const qty = shoppingCart[id];
    if(qty){
        const qtyUpdate = qty + 1
        shoppingCart[id] = qtyUpdate
    }else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


    // // added single item
    // const qty = localStorage.getItem(id);
    // if(qty){
    //     const qtyUpdate = parseInt(qty) + 1;
    //         localStorage.setItem(id, qtyUpdate)
    // }else{
    //     localStorage.setItem(id, 1)
    // }
}

export {setShoppingCart}