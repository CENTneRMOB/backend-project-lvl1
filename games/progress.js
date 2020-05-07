import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'What number is missing in the progression?';
//

// generate random string(askingFunc)
const getRandomString = () => {
  const arr = [];
  arr[0] = getRandomNumber(1, 15);
  const stepOfString = getRandomNumber(1, 15);
  const hideElement = getRandomNumber(0, 9);
  let res = arr[0];
  for (let i = 1; i < 10; i += 1) {
    arr[i] = res + stepOfString;
    res = arr[i];
  }
  const rightAnswer = String(arr[hideElement]);
  arr[hideElement] = '..';
  let ask = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    ask += `${item} `;
  }
  return [ask.trim(), rightAnswer];
};
//

const brainPrgGame = () => gamesLogic(task, getRandomString);

export default brainPrgGame;
