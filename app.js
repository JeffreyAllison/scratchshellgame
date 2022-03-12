// import functions and grab DOM elements
const cupImg0 = document.getElementById('cup-0');
const cupImg1 = document.getElementById('cup-1');
const cupImg2 = document.getElementById('cup-2');

const buttonZero = document.getElementById('cup-button-0');
const buttonOne = document.getElementById('cup-button-1');
const buttonTwo = document.getElementById('cup-button-2');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;

// set event listeners 
buttonZero.addEventListener('click', () => {
  let correctCup = getRandomHidingSpot();

  handleGuess('cup-1', correctCup);

});

buttonOne.addEventListener('click', () => {
  let correctCup = getRandomHidingSpot();

  handleGuess('cup-2', correctCup);

});

buttonTwo.addEventListener('click', () => {
  let correctCup = getRandomHidingSpot();

  handleGuess('cup-3', correctCup);

});

function getRandomHidingSpot() {
  const hidingPlaces = [
    'cup-1',
    'cup-2',
    'cup-3'
  ];

  const index = Math.floor(Math.random() * hidingPlaces.length);
  return hidingPlaces[index];
}

function resetStyles() {
  cupImg0.src = './assets/concealedcup.png';
  cupImg1.src = './assets/concealedcup.png';
  cupImg2.src = './assets/concealedcup.png';
}

function handleGuess(userGuess, correctCup) {

  resetStyles();

  const correctBallLocationEl = document.getElementById(`${correctCup}`);

  correctBallLocationEl.src = './assets/revealedcup.png';

  total++;

  if (userGuess === correctCup) {
    wins++;
  }
  totalEl.textContent = total;
  winsEl.textContent = wins;
  lossesEl.textContent = total - wins;
}