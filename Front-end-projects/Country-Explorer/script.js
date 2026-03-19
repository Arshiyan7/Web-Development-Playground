const input = document.getElementById('country_input')
const searchBtn = document.getElementById('search-btn')
const flag = document.getElementById('flag')
const countryName = document.getElementById('country-name')
const region = document.getElementById('region')
const subRegion = document.getElementById('sub-region')
const capital = document.getElementById('capital')
const population = document.getElementById('population')
const callDetail = document.getElementById('call-detail')
const areaDetail = document.getElementById('area-detail')
const currency = document.getElementById('currency')
const languages = document.getElementById('languages')

searchBtn.addEventListener('click', function () {
    const value = input.value.trim()
    fetchCountry(value)
})
async function fetchCountry(countryName) {
    try {
        const country_data = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,region,subregion,population,currencies,languages,flags,area,idd`
        );
        const data = await country_data.json();
        console.log(data[0]);
        DisplayData(data[0])
    } catch (error) {
        console.log(error);
    }
}

function DisplayData(data) {
    capital.textContent = data.capital[0]
    countryName.textContent = data.name.common
    region.textContent = data.region
    areaDetail.textContent = `${data.area} km²`
    subRegion.textContent = data.subregion
    population.textContent = data.population
    callDetail.textContent = `${data.idd.root}${data.idd.suffixes}` // use . operator when the name key is fixed like here root and suffixes were fixed
    currency.textContent = `${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol})` // use object.values when the key is unpredictable like here when you extract the currency each country currency key will change
    flag.innerHTML = `<img src="${data.flags.png}">`
    languages.textContent = Object.values(data.languages).join(", ")
}
