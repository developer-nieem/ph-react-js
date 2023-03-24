const loadCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const data = await res.json();
  displayData(data);
};

const displayData = (countrys) => {
  console.log(countrys[0]);
  const getCountrisHtml = countrys.map((country) => displayHtml(country));
  // console.log(getCountrisHtml);
  const getContainer = document.getElementById("container");
  getContainer.innerHTML = getCountrisHtml.join(" ");
};

// option 3
const displayHtml = ({ name, flags, area }) => {
  return `
        <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <img src="${flags.png}" >
        </div>
    `;
};

// option 2
/* const displayHtml = (country) =>{
    const {name , flags} = country
    return `
        <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}" >
        </div>
    `
}
 */
// orginal

/* const displayHtml = (country) =>{
    return `
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" >
        </div>
    `
} */

loadCountries();

const name = [45, 44, 46, 84, 85];

const num = [458, 897, 6597, 5689];
