import readlineSync from 'readline-sync';

// greeting
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,${userName}!`);
  return userName;
};
//

// generate random number
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
//

// game counts
const gameCounts = 3;
//

// game logic
const gamesLogic = (task, askAndRightAnswer) => {
  const userName = greeting();
  console.log(task);
  for (let i = 0; i < gameCounts; i += 1) {
    const [ask, rightAnswer] = askAndRightAnswer();
    console.log(`Question: ${ask}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    }
    if (answer !== rightAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
//

export {
  gamesLogic, getRandomNumber, greeting,
};
