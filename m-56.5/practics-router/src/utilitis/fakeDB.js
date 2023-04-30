const addToDB = (id) =>{
    let shoppingCart =  {}

    const storedCart =  localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart =  JSON.parse(storedCart)
    }

    // added qty

    const quantity =  shoppingCart[id];
    if (quantity) {
        const newQty =  quantity + 1;
        shoppingCart[id] =  newQty
    }else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart))
}


const getShoppingCart = () => {
    let shoppingCart =  {}

    const storedCart =  localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart =  JSON.parse(storedCart)
    }
return shoppingCart
}



const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart)
      if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
  }
export{addToDB , getShoppingCart , removeFromDb}