import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'Answer "yes" if the number is even, otherwise answer "no"';
//

// correction check func
const isEven = (num) => num % 2 === 0;
//

// export data
const askAndRightAnswer = () => {
  const ask = getRandomNumber(1, 100);
  const rightAnswer = isEven(ask) ? 'yes' : 'no';
  return [ask, rightAnswer];
};
//

const brainEvenGame = () => gamesLogic(task, askAndRightAnswer);

export default brainEvenGame;
