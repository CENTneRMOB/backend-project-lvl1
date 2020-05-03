import {
  userName, gamesLogic, getRandomNumber,
} from '../src/index.js';

console.log(`Hello,${userName}!`);
console.log('What is the result of the expression?');

// generate random expression(askingFunc)
const getRandomExpression = () => {
  const operands = ['+', '-', '*'];
  const randomOperand = operands[Math.round(Math.random() * (operands.length - 1))];
  return `${getRandomNumber(1, 25)} ${randomOperand} ${getRandomNumber(1, 25)}`;
};
//

// correction check func
const calc = (str) => {
  const arr = str.split(' ');
  arr[0] = Number(arr[0]);
  arr[2] = Number(arr[2]);
  let result;
  switch (arr[1]) {
    case '+':
      result = arr[0] + arr[2];
      break;
    case '-':
      result = arr[0] - arr[2];
      break;
    case '*':
      result = arr[0] * arr[2];
      break;
    default:
      result = NaN;
  }
  return String(result);
};
  //

// export data
const askAndRightAnswer = () => {
  const ask = getRandomExpression();
  const rightAnswer = calc(ask);
  return [ask, rightAnswer];
};
//

const brainCalcGame = () => gamesLogic(askAndRightAnswer);

export default brainCalcGame;