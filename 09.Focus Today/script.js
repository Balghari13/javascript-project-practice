const check = document.querySelectorAll('.custom-checkbox')
const errorLabel = document.querySelector('.error-label')
const goalInput = document.querySelectorAll('.goal-input')
const progressValue = document.querySelector('.progress-value')

console.log(progressValue);




check.forEach((checked)=> {
  checked.addEventListener('click',()=>{

  //  if( checked.nextElementSibling.value===''){
  //     errorLabel.style.display = 'block'
      
  //  }else{
  // checked.parentElement.classList.toggle('completed')
  // errorLabel.style.display = 'none'
  //  }
   
  const allGoals = [...goalInput].every((input)=> input.value)

  if(allGoals){
    checked.parentElement.classList.toggle('completed')
    progressValue.style.width = '33.33%'
  }else{
    errorLabel.style.display = 'block'
  }
  


  })
}
)

goalInput.forEach((input)=>{
  input.addEventListener('focus',()=>{
    errorLabel.style.display = 'none'
  })
})