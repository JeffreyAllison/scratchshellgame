// import functions and grab DOM elements
const cupImg0 = document.getElementById('cup-0');
const cupImg1 = document.getElementById('cup-1');
const cupImg2 = document.getElementById('cup-2');

const button0 = document.getElementById('cup-button-0');
const button1 = document.getElementById('cup-button-1');
const button2 = document.getElementById('cup-button-2');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;

function resetImages() {
  cupImg0.src = './assets/concealed-cup.png';
  cupImg1.src = './assets/concealed-cup.png';
  cupImg2.src = './assets/concealed-cup.png';
}

function displayWinsLossesAndTotal() {
  winsEl.textContent = wins;
  lossesEl.textContent = total - wins;
  totalEl.textContent = total;
}

// set event listeners 
button0.addEventListener('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++
    cupImg0.src = './assets/revealed-cup.png';
  } else if (randomCupNumber === 1) {
    cupImg1.src = './assets/revealed-cup.png';
  } else {
    cupImg2.src = './assets/revealed-cup.png';
  }
  displayWinsLossesAndTotal();
});

button1.addEventListener('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++
    cupImg0.src = './assets/revealed-cup.png';
  } else if (randomCupNumber === 1) {
    cupImg1.src = './assets/revealed-cup.png';
  } else {
    cupImg2.src = './assets/revealed-cup.png';
  }
  displayWinsLossesAndTotal();
});

button2.addEventListener('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++
    cupImg0.src = './assets/revealed-cup.png';
  } else if (randomCupNumber === 1) {
    cupImg1.src = './assets/revealed-cup.png';
  } else {
    cupImg2.src = './assets/revealed-cup.png';
  }
  displayWinsLossesAndTotal();
});


function handleGuess(userGuess, correctCup) {
  cupImg0.src = 'assets/concealed-cup.png';
  cupImg1.src = 'assets/concealed-cup.png';
  cupImg2.src = 'assets/concealed-cup.png';
  total++;

  const numberBetweenZeroAndThree = Math.floor(Math.random() * 3);

  if (numberBetweenZeroAndThree === correctCup) {
    wins++;
  }

  const correctCupImgEl = document.getElementById(`cup-${numberBetweenZeroAndThree}`);

  correctCupImgEl.src = 'assets/revealed-cup.png';

  winsEl.textContent = wins;
  totalEl.textContent = total;
  lossesEl.textContent = total - wins;

}



/*function getRandomCup() {
    const hidingPlaces = [
        'cup-0',
        'cup-1',
        'cup-2',
    ];

    const correctHidingPlaceEL = document.getElementById(`cup${correctCup}`);
    correctHidingPlaceEL.classList.add('face');

    if (userGuess === correctCup) {
        correctGuesses++;
    }
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
} /*

  // get user input
  // use user input to update state
  // update DOM to reflect the new state
