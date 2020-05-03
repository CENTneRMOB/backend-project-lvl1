import {
  userName, gamesLogic, getRandomNumber,
} from '../src/index.js';

console.log(`Hello,${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

// generate random numbers(askingFunc)
const getRandomNumbers = () => `${getRandomNumber(1, 100)} ${getRandomNumber(1, 100)}`;
//

// correction check func
const gcd = (str) => {
  const arr = str.split(' ');
  const n1 = arr[0];
  const n2 = arr[1];
  let div = n1;
  while (div !== 0) {
    if (n1 % div === 0 && n2 % div === 0) {
      return String(div);
    }
    div -= 1;
  }
  return String(div);
};
//

// export data
const askAndRightAnswer = () => {
  const ask = getRandomNumbers();
  const rightAnswer = gcd(ask);
  return [ask, rightAnswer];
};
//

const brainGcdGame = () => gamesLogic(askAndRightAnswer);

export default brainGcdGame;
