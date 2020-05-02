import {
  userName, gamesLogic,
} from '../src/index.js';

console.log(`Hello,${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');


// generate random number(askingFunc)
const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
//

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
  const ask = getRandomNumber();
  const rightAnswer = isEven(ask);
  return [ask, rightAnswer];
};
//

const brainEvenGame = () => gamesLogic(askAndRightAnswer);

export default brainEvenGame;
