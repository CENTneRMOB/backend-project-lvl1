import readlineSync from 'readline-sync';

// generate random number
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
//

// game counts
const gamesCount = 3;
//

// game logic
const gamesLogic = (task, questionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,${userName}!`);
  console.log(task);
  for (let i = 0; i < gamesCount; i += 1) {
    const [question, rightAnswer] = questionAndRightAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
//

export {
  gamesLogic, getRandomNumber,
};
