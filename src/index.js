import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello,${userName}!`);

// eslint-disable-next-line no-unreachable
export default userName;
