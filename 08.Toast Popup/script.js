const toastContainer = document.querySelector('.toast-container')
const horizontal = document.querySelector('#horizontal-position')
const vertical = document.querySelector('#vertical-position')
const showToastBtn = document.querySelector('.show-toast')
const toastStyle = document.querySelector('#toast-style')
const toastMsd = document.querySelector('#toast-msg')
const toastDuration = document.querySelector('#duration')

console.log(toastDuration.value);


showToastBtn.addEventListener('click',()=>{
   const newToast = document.createElement('div')
 newToast.classList.add('toast')
 newToast.classList.add(toastStyle.value)
 newToast.innerText = `${toastMsd.value} `;
 const closeIcon = document.createElement('span')
 closeIcon.innerText = '✕'
 newToast.append(closeIcon)
  if(horizontal.value === 'right'){
toastContainer.classList.add('right')
  }else{
    toastContainer.classList.remove('right')
  }
  if(vertical.value==='bottom'){
    toastContainer.classList.add('bottom')
  }else{
    toastContainer.classList.remove('bottom')
  }
   function removeClass(){
    if(toastContainer.classList.contains('right')){
newToast.classList.add('toRight')
    }else{
      newToast.classList.add('toLeft')
    }

    setTimeout(()=>{
      newToast.remove()
    },100)
}
closeIcon.addEventListener('click',()=>{

 removeClass()

 })
 
   setTimeout(()=>{
    removeClass()
  },parseInt(toastDuration.value)*1000)

 toastContainer.append(newToast) 

 

 


})
