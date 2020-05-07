import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'Find the greatest common divisor of given numbers.';
//

// correction check func
const gcd = (n1, n2) => {
  let div = n1;
  while (div !== 0) {
    if (n1 % div === 0 && n2 % div === 0) {
      return div;
    }
    div -= 1;
  }
  return div;
};
//

// export data
const askAndRightAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const ask = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(gcd(firstNumber, secondNumber));
  return [ask, rightAnswer];
};
//

const brainGcdGame = () => gamesLogic(task, askAndRightAnswer);

export default brainGcdGame;
