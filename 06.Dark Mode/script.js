console.log('------');


const bodyDark = document.querySelector('#full-dark-mode')
console.log(bodyDark);

const containerDark = document.querySelector('#container-dark-mode');
const container = document.querySelector('.container');

const isBodyDark = JSON.parse(localStorage.getItem('bodyDark'))
console.log(isBodyDark);

const isContainerDark = JSON.parse(localStorage.getItem('containerDark'))
console.log(isBodyDark);

if(isBodyDark){
  bodyDark.checked = true
}
if(isContainerDark){
  containerDark.checked = true
}
 bodyMode()
 containerMode()

bodyDark.addEventListener('change',()=>{
 bodyMode()
 containerMode()
})
function bodyMode(){
 if(bodyDark.checked){
document.body.classList.add('dark-mode')
localStorage.setItem('bodyDark', true)
  }else{
    document.body.classList.remove('dark-mode')
   localStorage.setItem('bodyDark', false) 
  }
  //containerDark.checked = bodyDark.checked
}
function containerMode(){
if(containerDark.checked){
container.classList.add('dark-mode')
localStorage.setItem('containerDark', true)
  }else{
    container.classList.remove('dark-mode')
    localStorage.setItem('containerDark', false)
  }
}
containerDark.addEventListener('change',containerMode)