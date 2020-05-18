import engine from '../index.js';
import getRandomNumber from '../utils.js';

// game task
const task = 'What number is missing in the progression?';
//

// export data and get the progression of numbers
const getQuestionAndRightAnswer = () => {
  const progression = [];
  const progressionLength = 10;
  const startOfProgression = getRandomNumber(1, 15);
  const stepOfProgression = getRandomNumber(1, 15);
  const indexOfHiddenElement = getRandomNumber(0, progressionLength - 1);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === indexOfHiddenElement) {
      progression.push('..');
    } else {
      const currentElement = startOfProgression + stepOfProgression * i;
      progression.push(currentElement);
    }
  }
  const rightAnswer = String(startOfProgression + stepOfProgression * indexOfHiddenElement);
  const question = progression.join(' ');
  return [question, rightAnswer];
};
//

const startBrainPrgGame = () => engine(task, getQuestionAndRightAnswer);

export default startBrainPrgGame;
