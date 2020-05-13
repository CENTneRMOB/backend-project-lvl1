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
const questionAndRightAnswer = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
//

const brainEvenGame = () => gamesLogic(task, questionAndRightAnswer);

export default brainEvenGame;
