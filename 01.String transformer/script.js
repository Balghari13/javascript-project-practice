console.log('hh');

const input = document.querySelector("#inputField")
const lowerCase = document.querySelector("#lowerCase")
const pascalCase = document.querySelector("#pascalCase")
const camelCase = document.querySelector("#camelCase")
const snakeCase = document.querySelector("#snakeCase")
const kebabCase = document.querySelector("#kebabCase")
const trimCase = document.querySelector("#trimCase")

//console.log(camelCase);


function capitalize(str){
  if(!str)return str
  return str[0].toUpperCase() + str.slice(1,str.length)
}
function camelCaseF(strings){
  const toLowerCaseString = strings.toLowerCase();
  
  const wordArray = toLowerCaseString.split(' ')
 // console.log('strings',wordArray);
  const finalArray = wordArray.map((word,i)=>{
    if(i===0) return word
    return capitalize(word)
  })
  return finalArray.join('');
  
}
function pascalCaseF(strings){
  const toLowerCaseString = strings.toLowerCase();
  const wordArray = toLowerCaseString.split(' ').map((word,i)=>capitalize(word));
  return wordArray.join('')
}

function snakeCaseF(strings){
  const wordArray = strings.split(' ').join('_')
  return wordArray;
}
function kebabCaseF(str){
 // return str.split(' ').join('-')
 return str.replaceAll(' ', '-')
}
function trimF(str){
  return str.replaceAll(' ','')
}

function updateScreen(){
lowerCase.value = input.value.toLowerCase()
  upperCase.value = input.value.toUpperCase()
  camelCase.value = camelCaseF(input.value)
  pascalCase.value = pascalCaseF(input.value)
  snakeCase.value = snakeCaseF(input.value)
  kebabCase.value = kebabCaseF(input.value)
  trimCase.value = trimF(input.value)
}
updateScreen();

input.addEventListener('input',updateScreen)


