document.querySelector("button").onclick = function(){
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  let backgroundColor = `rgb(${c1},${c2},${c3})`;
  document.querySelector("h1").innerText = backgroundColor;
  document.querySelector(".colorBox").style.backgroundColor = backgroundColor;
}