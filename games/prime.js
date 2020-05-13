import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
//

// correction check func
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let div = 2;
  while (div < num) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }
  return true;
};
//

// export data
const questionAndRightAnswer = () => {
  const question = getRandomNumber(1, 3572);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
//

const brainPrimeGame = () => gamesLogic(task, questionAndRightAnswer);

export default brainPrimeGame;
