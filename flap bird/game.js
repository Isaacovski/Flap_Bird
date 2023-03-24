const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');


const gameContainer = document.getElementById('game-container');
const flappyimg = new Image();
flappyimg.src = 'assets/Flappy_Bird_Background.png';

// game constants

const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT =30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

//bird variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.1;

//pipe variables
let pipeX = 400;
let pipeY = canvas.heigth - 200;

// score and highscore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highscore = 0;

document.body.onkeyup = function(e){
  if (e.code == 'Space') {
    birdVelocity = FLAP_SPEED
  }
}


function increase() {
  //todo
}

function collisionCheck() {
  //todo
}

function hideEndmenu() {
  document.getElementById('end-menu').style.display = 'none';
  gameContainer.classList.remove('backdrop-blur');
  
}

function showEndMenu() {
  document.getElementById('end-menu').style.display = 'block';
  gameContainer.classList.add('backdrop-blur');
  document.getElementById('end-score').innerHTML = score;
}


function resetGame() {
  //todo
}

function endgame() {
  //todo
}

function loop() {
  //reset the ctx after every loop interation
  ctx.clearReect(0, 0, canvas.clientWidth, canvas.heigth);

  //Draw Flappy bird
  ctx.drawImage(flappyimg,birdX, birdY);
  //draw pipws
  //ctx.fillStyle = '#333';
 
  requestAnimationFrame(loop);
}

loop();