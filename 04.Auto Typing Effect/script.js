console.log('-------');

const span = document.querySelector('.text');



const words = ['Student','Coder','Developer']

//const word = 'Student';
let wordIndex = 0;
let charIndex = 0;
let skipUpdate = 0
let reverseType = false;

// const intervalId = setInterval(()=>{
// if(skipUpdate){
//   skipUpdate--
//   return
// }
// if(!reverseType){
//   skipUpdate = 1;
//   span.innerText += words[wordIndex][charIndex]
//     charIndex++
// }else{
//   span.innerText = span.innerText.slice(0, span.innerText.length-1)
//   charIndex--
// }
// if(charIndex===words[wordIndex].length){
//     reverseType = true;
//     skipUpdate =5
//   }
// if(span.innerText.length ===0 && reverseType){
//   reverseType = false;
//   // charIndex= 0;
//    wordIndex++
// }
  
//   if(wordIndex === words.length){
//     wordIndex = 0;
//   }
  
    
// console.log('hello');

 
// },100)

function autoTyping(){
setInterval(()=>{
  if(skipUpdate){
    skipUpdate--;
    return
  }
  if(!reverseType){
    skipUpdate = 1
  span.innerText += words[wordIndex][charIndex]
  charIndex++
}else{
  span.innerText = span.innerText.slice(0, span.innerText.length-1)
  charIndex--
}
if(charIndex === words[wordIndex].length){
  reverseType = true
  skipUpdate = 5
}
if(span.innerText.length === 0 && reverseType){
  reverseType = false
  wordIndex++
}
if(wordIndex === words.length){
  wordIndex = 0
}

},200)
}

autoTyping()