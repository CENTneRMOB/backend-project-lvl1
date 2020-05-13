import {
  gamesLogic, getRandomNumber,
} from '../src/index.js';

// game task
const task = 'What is the result of the expression?';
//

// generate random expression(askingFunc)
const getRandomExpression = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomNumber(0, operations.length - 1)];
  const firstNumberForExpression = getRandomNumber(1, 25);
  const secondNumberForExpression = getRandomNumber(1, 25);
  return [firstNumberForExpression, randomOperation, secondNumberForExpression];
};
//

// correction check func
const calc = (expression) => {
  let result;
  switch (expression[1]) {
    case '+':
      result = expression[0] + expression[2];
      break;
    case '-':
      result = expression[0] - expression[2];
      break;
    case '*':
      result = expression[0] * expression[2];
      break;
    default:
      result = false;
  }
  return result;
};
  //

// export data
const questionAndRightAnswer = () => {
  const expression = getRandomExpression();
  const question = expression.join(' ');
  const rightAnswer = String(calc(expression));
  return [question, rightAnswer];
};
//

const brainCalcGame = () => gamesLogic(task, questionAndRightAnswer);

export default brainCalcGame;
