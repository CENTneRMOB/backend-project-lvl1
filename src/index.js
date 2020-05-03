import readlineSync from 'readline-sync';

// user greeting
const greeting = 'Welcome to the Brain Games!';
console.log(greeting);
//

// user name input
const userName = readlineSync.question('May I have your name? ');
//

// generate random number
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
//

// game counts
const gameCounts = 3;
//

// game logic
const gamesLogic = (askAndRightAnswer) => {
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
  userName, gamesLogic, getRandomNumber,
};
