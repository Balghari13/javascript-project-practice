// console.log("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital");


 const countriesCard = document.querySelector('.countries-card')
 const filterRegion = document.querySelector('.filter-region')
 const searchCountry = document.querySelector('.search-container input')

 const darkMode = document.querySelector('.dark-mode')
 
 let filterCountryByName

 fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
 .then((res)=>res.json())
 .then((data)=>{
  renderCountries(data)
  filterCountryByName = data;
 }
 // (data)=>{
  // countriesCard.innerHTML = ``
  // data.forEach((country)=>{
   
    
  //   const countryCard = document.createElement('a');
  //   countryCard.classList.add('country-card')
  //    countryCard.href = `country.html?name=${country.name.common}`;
  //   countryCard.innerHTML = `
  //    <img src=${country.flags.svg} alt="flag">
  //   <div class="card-text">
  //         <h3 class="card-title">${country.name.common}</h3>
  //       <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
  //       <p><b>Region:</b>${country.region}</p>
  //       <p><b>Capital:</b> ${country.capital}</p>
  //       </div>
  //   `
  //   countriesCard.append(countryCard)
  // })
 //}
)

 filterRegion.addEventListener('change',()=>{
  fetch(`https://restcountries.com/v3.1/region/${ filterRegion.value}`)
 .then((res)=>res.json())
 .then(

//   (data)=>{
//   countriesCard.innerHTML = ``
//   data.forEach((country)=>{
   
    
//     const countryCard = document.createElement('a');
//     countryCard.classList.add('country-card')
//      countryCard.href = `country.html?name=${country.name.common}`;
//     countryCard.innerHTML = `
//      <img src=${country.flags.svg} alt="flag">
//     <div class="card-text">
//           <h3 class="card-title">${country.name.common}</h3>
//         <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
//         <p><b>Region:</b>${country.region}</p>
//         <p><b>Capital:</b> ${country.capital}</p>
//         </div>
//     `
//     countriesCard.append(countryCard)
//   })
//  }
)
 })

function renderCountries(data){
countriesCard.innerHTML = ``
  data.forEach((country)=>{
   
    
    const countryCard = document.createElement('a');
    countryCard.classList.add('country-card')
     countryCard.href = `country.html?name=${country.name.common}`;
    countryCard.innerHTML = `
     <img src=${country.flags.svg} alt="flag">
    <div class="card-text">
          <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
        <p><b>Region:</b>${country.region}</p>
        <p><b>Capital:</b> ${country.capital}</p>
        </div>
    `
    countriesCard.append(countryCard)
  })
}

searchCountry.addEventListener('input',(e)=>{
  
  const filterName = filterCountryByName.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
renderCountries(filterName)
  console.log(filterName);
  
})

darkMode.addEventListener('click',()=>{
  document.body.classList.toggle('dark')

  if(document.body.classList.contains('dark')){
    darkMode.innerHTML = '<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode'
  }else{
    darkMode.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`
  }
})