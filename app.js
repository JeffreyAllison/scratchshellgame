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
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++;
    cupImg0.src = './assets/revealedcup.png';
  } else if (randomCupNumber === 1) {
    cupImg1.src = './assets/revealedcup.png';
  } else {
    cupImg2.src = './assets/revealedcup.png';
  }
  displayWinsLossesAndTotal();
  handleGuess();
});

buttonOne.addEventListener('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++;
    cupImg0.src = './assets/revealedcup.png';
  } else if (randomCupNumber === 1) {
    cupImg1.src = './assets/revealedcup.png';
  } else {
    cupImg2.src = './assets/revealedcup.png';
  }
  displayWinsLossesAndTotal();
  handleGuess();
});

buttonTwo.addEventListener('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++;
    cupImg0.src = './assets/revealedcup.png';
  } else if (randomCupNumber === 1) {
    cupImg1.src = './assets/revealedcup.png';
  } else {
    cupImg2.src = './assets/revealedcup.png';
  }
  displayWinsLossesAndTotal();
  handleGuess();
});

function resetImages() {
  cupImg0.src = './assets/concealedcup.png';
  cupImg1.src = './assets/concealedcup.png';
  cupImg2.src = './assets/concealedcup.png';
}

function displayWinsLossesAndTotal() {
  winsEl.textContent = wins;
  lossesEl.textContent = total - wins;
  totalEl.textContent = total;
}

function handleGuess(userGuess, correctCup) {
  cupImg0.classList.remove('assets/concealedcup.png');
  cupImg1.classList.remove('assets/concealedcup.png');
  cupImg2.classList.remove('assets/concealedcup.png');
  total++;

  const numberBetweenZeroAndThree = Math.floor(Math.random() * 3);

  if (numberBetweenZeroAndThree === correctCup) {
    wins++;

    const correctBallLocationEl = document.getElementById(`${correctCup}`);

    correctBallLocationEl.classList.add('./assets/revealedcup.png');

    if (userGuess === correctCup) {
      wins++;
    }
    totalEl.textContent = total;
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
  }
}