const closePopup = document.querySelector('.close');
const popup = document.querySelector('.popup');
const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');
console.log(overlay);

console.log(popup);

button.addEventListener('click',()=>{
  popup.classList.add('open')
  overlay.classList.add('open')
})

closePopup.addEventListener('click',()=>{
  popup.classList.remove('open')
   overlay.classList.remove('open')
})

overlay.addEventListener('click',(e)=>{
  console.log('click', e);
  
  popup.classList.remove('open')
   overlay.classList.remove('open')
})
