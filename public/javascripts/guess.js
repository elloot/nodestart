function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const num = getRandomIntInclusive(1, 10);

let guess = 0;

let guessCount = 0;

const input = document.querySelector('#guess');

async function getGuess (e) {
  guess = parseInt(input.value);
  guessCount++;

  if (guess === num) {
    console.log(`Jippi, du gissade rätt med talet ${guess}. Det tog ${guessCount} gissningar`);
  }

  await sleep(150);

  input.value = '';
}

input.addEventListener('input', (e) => {
  getGuess(e);
});

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
