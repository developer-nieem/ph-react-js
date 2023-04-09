
export  const productsLoadData = async() =>{
    const fetchData =  await fetch('products.json');
    const data =  await fetchData.json();
    return data;
}