console.log('---');

const billInput = document.querySelector('.input-container input')

const customTip = document.querySelector('.custom-input')

const totalPeople = document.querySelector('.people-input')

const generateBillBtn = document.querySelector('.generate-bill')

const tipAmountShow = document.querySelector('.tip-amount span')
const totalShow = document.querySelector('.total span')
const eachPersonShow = document.querySelector('.each-person-bill span')

const tipContainer = document.querySelector('.tip-container')

const resetBtn = document.querySelector('.reset-btn')
let tipPercentage = 0;

generateBillBtn.addEventListener('click',()=>{
  const billAmounts = billInput.value
  //const customTips = customTip.value
  const totalTip = (billAmounts*(tipPercentage/100))
  const totalPeoples = totalPeople.value
  const totalBill = (parseInt(billAmounts) + parseInt(totalTip));
console.log(totalBill);

  const eachBill = (parseInt(billAmounts) + parseInt(totalTip))/totalPeoples;

  tipAmountShow.innerText = totalTip;
  totalShow.innerText = totalBill;
  eachPersonShow.innerText = eachBill;
  console.log(totalBill);
  resetBtn.disabled = false
})

tipContainer.addEventListener('click',(e)=>{
  if(tipContainer.classList.contains('disable')) return;
  if(e.target != tipContainer){
    [...tipContainer.children].forEach((tip)=>tip.classList.remove('selected'))
 e.target.classList.add('selected');
tipPercentage = parseInt(e.target.innerText)
console.log(tipPercentage);
customTip.value = ''

  }
  if(tipPercentage && totalPeople.value){
    generateBillBtn.disabled = false;

  }else{
    generateBillBtn.disabled = true;
  }
})

customTip.addEventListener('input',()=>{
  
[...tipContainer.children].forEach((tip)=>tip.classList.remove('selected'));
tipPercentage = parseInt(customTip.value)
if(tipPercentage && totalPeople.value){
    generateBillBtn.disabled = false;
  }else{
    generateBillBtn.disabled = true;
  }

console.log(tipPercentage);

})

resetBtn.addEventListener('click',()=>{
  tipPercentage = 0
  billInput.value = '';
  customTip.value = '';
totalPeople.value = '';
  tipAmountShow.innerText = '';
  totalShow.innerText = '';
  eachPersonShow.innerText = '';
  [...tipContainer.children].forEach((tip)=>tip.classList.remove('selected'))
  resetBtn.disabled = true;
})

billInput.addEventListener('input',()=>{
  console.log(billInput.value);
  
  if(billInput.value){
    customTip.disabled = false;
    totalPeople.disabled = false;
    //generateBillBtn.disabled= false;
    tipContainer.classList.remove('disable')
  }else{
     customTip.disabled = true;
    totalPeople.disabled = true;
    tipContainer.classList.add('disable')
  }
})

totalPeople.addEventListener('input',()=>{
 if(tipPercentage && totalPeople.value){
    generateBillBtn.disabled = false;
  }else{
    generateBillBtn.disabled = true;
  }
})