import gamesLogic from '../src/index.js';
import getRandomNumber from '../src/utils.js';

// game task
const task = 'What number is missing in the progression?';
//

// generate random string and export [question, rightAnswer]
const getRandomString = () => {
  const arrayOfElements = [];
  const elementsCount = 10;
  const startOfArray = getRandomNumber(1, 15);
  const stepOfString = getRandomNumber(1, 15);
  const hiddenElement = getRandomNumber(0, elementsCount - 1);
  for (let i = 0; i < elementsCount; i += 1) {
    const currentElement = startOfArray + stepOfString * i;
    arrayOfElements.push(currentElement);
  }
  const rightAnswer = String(arrayOfElements[hiddenElement]);
  arrayOfElements[hiddenElement] = '..';
  const question = arrayOfElements.join(' ');
  return [question, rightAnswer];
};
//

const startBrainPrgGame = () => gamesLogic(task, getRandomString);

export default startBrainPrgGame;
