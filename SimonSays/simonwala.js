let level = 0;
let userSeq = [];
let started = false;
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelUp();
    }
})
let gameSeq = [];
let h2 = document.querySelector("h2");
let btns = ["blue","red","green","yellow"]
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`
    let randidx = Math.floor(Math.random()*3);
    let randcolour = btns[randidx]
    let randbtn = document.querySelector(`.${randcolour}`)
    gameSeq.push(randcolour)
    GamebtnFlash(randbtn);
    score();
}
function GamebtnFlash(randbtn){
    randbtn.classList.add("flash");
    setTimeout(function(){
        randbtn.classList.remove("flash");
    },250);
}
let allBtns = document.querySelectorAll(".btn")
for(allBtn of allBtns){
    allBtn.addEventListener("click",function(){
        let btn = this; 
        userFlash(btn);
    });
}
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    usercolour = btn.getAttribute("id");
    userSeq.push(usercolour)
    checkAns(userSeq.length-1)
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        setTimeout(function(){
            document.querySelector("h2").style.color = "red"
            h2.innerHTML = `Game over ! Press any key to start`;
        },200)
        setTimeout(reset,1000)
    }
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    document.querySelector("h2").style.color = "white";
}
let Hscore = localStorage.getItem("HighestScore") || 0;
document.querySelector(".score").innerText = `Heighest Score : ${Hscore}`;
function score(){
    if(level > Hscore){
      Hscore = level;
      localStorage.setItem("HighestScore",Hscore);
      document.querySelector(".score").innerText = `Heighest Score : ${Hscore}`;
    }
}