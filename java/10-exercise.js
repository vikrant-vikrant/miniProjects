let game = document.querySelector('.gaming');
let music = document.querySelector('.music');
let tech = document.querySelector('.tech');
function onoff0(){
  if(game.classList.contains('is-toggled') === true){
    game.classList.remove('is-toggled');
    }else{
      game.classList.add('is-toggled');
      music.classList.remove('is-toggled')
      tech.classList.remove('is-toggled')
  }
}
function onoff1(){
  if(music.classList.contains('is-toggled') === true){
    music.classList.remove('is-toggled')
    }else{
    music.classList.add('is-toggled');
    game.classList.remove('is-toggled');
    tech.classList.remove('is-toggled')
  }
}
function onoff2(){
  if(tech.classList.contains('is-toggled') === true){
    tech.classList.remove('is-toggled')
    }else{
    tech.classList.add('is-toggled');
    game.classList.remove('is-toggled');
    music.classList.remove('is-toggled')
  }
}

function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}