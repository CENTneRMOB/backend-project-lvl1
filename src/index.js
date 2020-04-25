import readlineSync from 'readline-sync';

// 1. user greeting
const greeting = 'Welcome to the Brain Games!';
console.log(greeting);
//

// 2. user name input
const userName = readlineSync.question('May I have your name? ');
//

// 3. generate random number
const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
//

// 4. is Even
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};
//

// 5. answer and is it right
const isAnswerRight = (num) => {
  const answer = readlineSync.question('Your answer: ');
  let result = '';
  if (answer === isEven(num)) {
    result = 'Correct!';
  }
  if (answer !== isEven(num)) {
    result = `"${answer}" is wrong answer ;(. Correct answer was "${isEven(num)}".\nLet's try again, ${userName}!`;
  }
  return result;
};
//

// 6.ask numbers
const askNumber = () => {
  let i = 0;
  while (i < 3) {
    const num = getRandomNumber();
    console.log(`Question: ${num}`);
    const answer = isAnswerRight(num);
    console.log(`${answer}`);
    i += 1;
    if (i === 3 && answer === 'Correct!') {
      console.log(`Congratulations, ${userName}!`);
    }
    if (answer !== 'Correct!') {
      break;
    }
  }
};
//

// eslint-disable-next-line no-unreachable
export {
  userName, askNumber, isAnswerRight,
};
