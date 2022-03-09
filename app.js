// import functions and grab DOM elements
const cupImg0 = document.getElementById('cup-0');
const cupImg1 = document.getElementById('cup-1');
const cupImg2 = document.getElementById('cup-2');

const button0 = document.getElementById('button-0');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;

function handleGuess(userGuess, correctSpot) {
  cupImg0.src = 'assets/cup0.png';
  cupImg1.src = 'assets/cup1.png';
  cupImg2.src = 'assets/cup2.png';
  total++;

  // set event listeners 
  button0.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('cup-0', correctSpot);
  });

  button1.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('cup-1', correctSpot);
  });

  button2.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('cup-2', correctSpot);
  });

  function getRandomHidingSpot() {
    const hidingPlaces = [
      'cup1',
      'cup2',
      'cup3',
    ];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
  }


  const correctHidingPlaceEL = document.getElementById(`${correctSpot}-container`);
  correctHidingPlaceEL.classList.add('face');
  if (userGuess === correctSpot) {
    correctGuesses++;
  }
  totalEl.textContent = totalGuesses;
  winsEl.textContent = correctGuesses;
  lossesEl.textContent = totalGuesses - correctGuesses;
}

  // get user input
  // use user input to update state
  // update DOM to reflect the new state
