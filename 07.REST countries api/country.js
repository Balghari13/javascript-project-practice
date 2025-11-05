const countryNames = new URLSearchParams(location.search).get('name');
const flagImg = document.querySelector('img')
const countryName= document.querySelector('.countryName')
const nativeName= document.querySelector('.native-name')
const population= document.querySelector('.population')
const region= document.querySelector('.region')
const subRegion= document.querySelector('.sub-region')
const capital= document.querySelector('.capital')
const tld= document.querySelector('.tld')
const currency= document.querySelector('.currency')
const language= document.querySelector('.language')
const borderCountries= document.querySelector('.border-countries')

fetch(`https://restcountries.com/v3.1/name/${countryNames}?fullText=true`)
.then((res)=>res.json())
.then(([country])=>{
  
 console.log(country.currencies);
 
  
  flagImg.src = country.flags.svg
  countryName.innerText = country.name.common
  
  if(country.name.nativeName){
    nativeName.innerText = Object.values(country.name.nativeName)[0].common
  }else{
    nativeName.innerText = country.name.common
  }
  population.innerText = country.population.toLocaleString('en-IN')
 region.innerText = country.region;
 if(country.subregion){
    subRegion.innerText = country.subregion;
 }
if(country.capital){
    capital.innerText = country.capital?.[0];
 }
 
tld.innerText = country.tld.join(', ');

if(country.currencies){
currency.innerText = Object.values(country.currencies).map((currency)=>currency.name).join(', ')
}

if(country.languages){
  language.innerText = Object.values(country.languages).join(', ')
}

if(country.borders){
  country.borders.forEach((border)=>{
    fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json())
    .then(([borderCountry])=>{
      console.log(borderCountry);
      
      const countryBorderTag = document.createElement('a')
      countryBorderTag.innerText = borderCountry.name.common
      countryBorderTag.href = `country.html?name=${borderCountry.name.common}`
      
      
    borderCountries.append(countryBorderTag)
      
    }
    )
  })
}

})
