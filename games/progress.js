import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'What number is missing in the progression?';
//

// generate random string and export [question, rightAnswer]
const getRandomString = () => {
  const firstElement = getRandomNumber(1, 15);
  const arrayOfElements = [firstElement];
  const lengthOfArray = 10;
  const stepOfString = getRandomNumber(1, 15);
  const hiddenElement = getRandomNumber(0, 9);
  for (let i = 1; i < lengthOfArray; i += 1) {
    const currentElement = firstElement + stepOfString * i;
    arrayOfElements.push(currentElement);
  }
  const rightAnswer = String(arrayOfElements[hiddenElement]);
  arrayOfElements[hiddenElement] = '..';
  const question = arrayOfElements.join(' ');
  return [question, rightAnswer];
};
//

const brainPrgGame = () => gamesLogic(task, getRandomString);

export default brainPrgGame;
