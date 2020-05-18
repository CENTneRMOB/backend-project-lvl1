import engine from '../index.js';
import getRandomNumber from '../utils.js';

// game task
const task = 'Answer "yes" if the number is even, otherwise answer "no"';
//

// correction check func
const isEven = (num) => num % 2 === 0;
//

// export data
const getQuestionAndRightAnswer = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
//

const startBrainEvenGame = () => engine(task, getQuestionAndRightAnswer);

export default startBrainEvenGame;
