const score =JSON.parse(localStorage.getItem('result')) || {
  wins:0,
  losses:0,
  Ties:0
};
function playGame(playerMove){
  const ans = pickComputerMove();
  let result ;
  if(playerMove === 'scissor'){
    if(ans === 'rock'){
      result = 'You lose👎🏻'
    }else if(ans === 'paper'){
      result = 'You win🎉'
    }else{
      result = 'Tie🤨'
    }
  }else if(playerMove === 'paper'){
    if(ans === 'rock'){
      result = 'You win🎉'
    }else if(ans === 'paper'){
      result = 'Tie🤨'
    }else{
      result='You lose👎🏻'
    }
  }else if(playerMove==='rock'){
    if(ans === 'rock'){
      result = 'Tie🤨'
    }else if(ans === 'paper'){
      result = 'You lose👎🏻'
    }else{
      result = 'You win🎉'
    }
  }
  if(result === 'You win🎉'){
    score.wins ++
  }else if (result === 'You lose👎🏻'){
    score.losses ++
  }else{
    score.Ties ++
  }
  localStorage.setItem('result',JSON.stringify(score));
  const whoWin = document.querySelector('.whoWin');
  whoWin.innerText = `${result}`;
  const move = document.querySelector('.move');
  move.innerText = `👦🏻 ${playerMove} - ${ans} 🤖`;
  const total = document.querySelector('.total');
  total.innerText = `Wins : ${score.wins}🎉 / Losses : ${score.losses}👎🏻 / Ties : ${score.Ties}🤨`;  
};
function pickComputerMove(){
  let ans;
    const value1 = Math.random();
    if(value1 >= 0 && value1 < 1/3){
      ans = 'rock' ;
    }else if (value1 >= 1/3 && value1 <2/3){
      ans = 'paper';
    }else{
      ans = 'scissor';
    }
    return ans;
}
document.querySelector(".totalScore").addEventListener("click",()=>{
  total = document.querySelector('.total');total.innerText = `Wins : 0🎉 / Losses : 0👎🏻 / Tie : 0🤨`;
  score.wins = 0;
  score.losses = 0;
  score.Ties = 0;
})
