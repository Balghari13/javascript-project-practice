const check = document.querySelectorAll('.custom-checkbox')
const errorLabel = document.querySelector('.error-label')
const goalInput = document.querySelectorAll('.goal-input')
const progressValue = document.querySelector('.progress-value')
const progressLabel = document.querySelector('.progress-label')



const allGoal = JSON.parse(localStorage.getItem("allGoals"))||{}

const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away, keep going!',
  'Whoa! You just completed all the goals, time for chill :D',
]

 goalCompleted = Object.values(allGoal).filter((goal)=>goal.completed).length;
progressValue.style.width = `${goalCompleted/goalInput.length * 100}%`
 progressValue.firstElementChild.innerText = `${goalCompleted}/${goalInput.length} completed`
 progressLabel.innerText = `${allQuotes[goalCompleted]}`
    console.log(goalCompleted);

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
    
    const inputId = checked.nextElementSibling.id
    allGoal[inputId].completed = !allGoal[inputId].completed
  
    goalCompleted = Object.values(allGoal).filter((goal)=>goal.completed).length;

    
     progressValue.style.width = `${goalCompleted/goalInput.length * 100}%`
     
    progressValue.firstElementChild.innerText = `${goalCompleted}/${goalInput.length} completed`
    progressLabel.innerText = allQuotes[goalCompleted]
    console.log(goalCompleted);
    

    localStorage.setItem('allGoals', JSON.stringify(allGoal))
  
   
  }else{
    errorLabel.style.display = 'block'
    console.log(errorLabel.nextSibling);
    
    errorLabel.children[0].innerText = goalInput.length
  }
  


  })
}
)

goalInput.forEach((input)=>{

if(allGoal[input.id]){
input.value = allGoal[input.id].name

if(allGoal[input.id].completed){
    input.parentElement.classList.add('completed')
  }
}
  

  

  input.addEventListener('focus',()=>{
    errorLabel.style.display = 'none'
  })

  input.addEventListener('input',()=>{

    if(allGoal[input.id] && allGoal[input.id].completed){
      input.value = allGoal[input.id].name
      return
    };
    // console.log(input.id);
    //  if (allGoals[input.id]) {
    //   allGoals[input.id].name = input.value
    // } else {
    //   allGoals[input.id] = {
    //     name: input.value,
    //     completed: false,
    //   }
    // }
    allGoal[input.id] = {
      name: input.value,
      completed: false
    }
    localStorage.setItem('allGoals', JSON.stringify(allGoal))
    
  })

})


