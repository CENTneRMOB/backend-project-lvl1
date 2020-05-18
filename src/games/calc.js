import engine from '../index.js';
import getRandomNumber from '../utils.js';

// game task
const task = 'What is the result of the expression?';
//


// correction check func
const calc = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return false;
  }
  return result;
};
  //

// export data and get the expression
const getQuestionAndRightAnswer = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomNumber(0, operations.length - 1)];
  const firstNumOfExpression = getRandomNumber(1, 25);
  const secondNumOfExpression = getRandomNumber(1, 25);
  const question = `${firstNumOfExpression} ${randomOperation} ${secondNumOfExpression}`;
  const rightAnswer = String(calc(firstNumOfExpression, secondNumOfExpression, randomOperation));
  return [question, rightAnswer];
};
//

const startBrainCalcGame = () => engine(task, getQuestionAndRightAnswer);

export default startBrainCalcGame;
