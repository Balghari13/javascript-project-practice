const nav = document.querySelector('nav')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')

menu.addEventListener('click',()=>{
  nav.classList.add('open')
})
close.addEventListener('click',()=>{
  nav.classList.remove('open')
})