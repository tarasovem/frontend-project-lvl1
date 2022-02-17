#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const GAME_DURATION = 3;
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const getRandowNumber = () => {
  const number = MIN_NUMBER + Math.random() * (MAX_NUMBER + 1 - MIN_NUMBER);
  return Math.floor(number);
};

for (let i = 1; i <= GAME_DURATION; i += 1) {
  const number = getRandowNumber();
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (rightAnswer !== userAnswer) {
    console.log(`"${rightAnswer === 'yes' ? userAnswer : 'yes'}" is wrong answer ;(. Correct answer was "${rightAnswer === 'yes' ? 'yes' : 'no'}"`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (i === GAME_DURATION) {
    console.log(`Congratulations, ${name}!`);
    break;
  } else {
    console.log('Correct!');
  }
}
