const loadCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const res = await fetch(url);
    const data = await res.json();
    displayData(data)
} 

const displayData = (countrys) =>{
    console.log(countrys);
    const getCountrisHtml = countrys.map(country => displayHtml(country));
    // console.log(getCountrisHtml);
    const getContainer =  document.getElementById('container');
    getContainer.innerHTML = getCountrisHtml.join(' ');
}


const displayHtml = (country) =>{
    return `
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" >
        </div>
    `
}
loadCountries()