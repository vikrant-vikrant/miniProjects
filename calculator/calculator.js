let calculation = localStorage.getItem('value') || '' ;
let ans = document.querySelector('div');
function fufu(value) {
  calculation += value;
  ans.innerText = calculation;
  localStorage.setItem('value',calculation);
}