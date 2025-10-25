console.log("hh");

const input = document.querySelector("input");

let preNumber = "";
let first3Digits = "";



input.addEventListener("input", (e) => {
  let num = e.target.value;
if(/\d+$/g.test(num)){
  input.value = num
}else{
  input.value = num.substring(0,num.length-1)
}
  if (num.length === 4 && preNumber.length < num.length) {
    first3Digits = num.substring(0, 3);
    console.log("3 digit", first3Digits);

    input.value = `+(${first3Digits})-${num.substring(num.length - 1)}`;
  } else if (num.length === 9 && preNumber.length > num.length) {
    input.value = first3Digits;
  }
 preNumber = num
});
