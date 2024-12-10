const score = JSON.parse(localStorage.getItem('score')) || {
  totalWins : 0,
  totallosses : 0,
}
document.querySelector('.score').innerText = `Total Wins: ${score.totalWins} ,Total Losses: ${score.totallosses}`
function playGuess(guess){
  const num = Math.random();
  let result = num>.5? ('Heads'):('Tails');
  result === guess?document.querySelector('p').innerText = `You win 😎`:document.querySelector('p').innerText = `You Loss 😐`
  result === guess?score.totalWins += 1:score.totallosses += 1;
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.score').innerText = `Total Wins: ${score.totalWins} ,Total Losses: ${score.totallosses}`;
}