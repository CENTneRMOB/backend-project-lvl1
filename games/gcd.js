import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'Find the greatest common divisor of given numbers.';
//

// correction check func
const getGreatestCommonDivider = (num1, num2) => {
  let divider = num1;
  while (divider !== 0) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
    divider -= 1;
  }
  return divider;
};
//

// export data
const questionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGreatestCommonDivider(firstNumber, secondNumber));
  return [question, rightAnswer];
};
//

const brainGcdGame = () => gamesLogic(task, questionAndRightAnswer);

export default brainGcdGame;
