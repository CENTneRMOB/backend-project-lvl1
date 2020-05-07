import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
//

// correction check func
const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  let div = 2;
  while (div < num) {
    if (num % div === 0) {
      return 'no';
    }
    div += 1;
  }
  return 'yes';
};
//

// export data
const askAndRightAnswer = () => {
  const ask = getRandomNumber(1, 3572);
  const rightAnswer = isPrime(ask);
  return [ask, rightAnswer];
};
//

const brainPrimeGame = () => gamesLogic(task, askAndRightAnswer);

export default brainPrimeGame;
