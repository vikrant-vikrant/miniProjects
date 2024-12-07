let equalPressed = 0;
let buttonInput = document.querySelectorAll(".input-button");
let input = document.querySelector("#input");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let erase = document.querySelector("#erase");
window.onload = () =>{
  input.value = "";
};
buttonInput.forEach((buttonInput)=>{
  buttonInput.addEventListener("click",()=>{
    if(equalPressed == 1){
      input.value = "";
      equalPressed = 0;
    }else{
      input.value += buttonInput.value;
    }
  })
})
equal.addEventListener("click",()=>{
  equalPressed = 1;
  let inp_val = input.value;
  try{
    let solution = eval(inp_val)
    if(Number.isInteger(solution)){
      input.value = solution;
    }else{
      input.value = solution.toFixed(2);
    }
  }catch(err){
    alert("Invalid Input");
  }
});
clear.addEventListener("click",()=>{
  input.value = "";
});
erase.addEventListener("click",()=>{
  input.value = input.value.substr(0,input.value.length - 1)
});

let checkBox = document.querySelector(".dayDark");
checkBox.addEventListener('click', function() {
  const checkbox = document.querySelector(".dayDark");
  let btn = document.querySelector("#equal");
  let calculator = document.querySelector(".calculator");
  let buttons = document.querySelector(".buttons");
  if (checkbox.checked) {
    btn.style.backgroundColor="#4f4d4b";
    calculator.style.backgroundColor="#666666";
  } else {
    calculator.style.backgroundColor="#15173c";
    btn.style.backgroundColor="#d8737f";
  }
});