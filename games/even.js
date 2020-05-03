import {
  userName, gamesLogic, getRandomNumber,
} from '../src/index.js';

console.log(`Hello,${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// correction check func
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};
//

// export data
const askAndRightAnswer = () => {
  const ask = getRandomNumber(1, 100);
  const rightAnswer = isEven(ask);
  return [ask, rightAnswer];
};
//

const brainEvenGame = () => gamesLogic(askAndRightAnswer);

export default brainEvenGame;
