import readlineSync from 'readline-sync';

// game engine
const engine = (task, questionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,${userName}!`);
  console.log(task);
  const gamesCount = 3;
  for (let i = 0; i < gamesCount; i += 1) {
    const [question, rightAnswer] = questionAndRightAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
//

export default engine;
