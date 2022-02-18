#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const GAME_DURATION = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 30;

const getRandowNumber = (min, max) => {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

for (let i = 1; i <= GAME_DURATION; i += 1) {
  const firstNumber = getRandowNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandowNumber(MIN_NUMBER, MAX_NUMBER);
  const mathOperationType = getRandowNumber(1, 3);
  let rightAnswer = null;

  switch (mathOperationType) {
    case 1:
      console.log(`Question: ${firstNumber} + ${secondNumber}`);
      rightAnswer = firstNumber + secondNumber;
      break;
    case 2:
      console.log(`Question: ${firstNumber} - ${secondNumber}`);
      rightAnswer = firstNumber - secondNumber;
      break;
    case 3:
      console.log(`Question: ${firstNumber} * ${secondNumber}`);
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      console.error('Wrong type of math operation.');
  }

  const userAnswer = readlineSync.question('Your answer: ');
  if (rightAnswer !== Number(userAnswer)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (i === GAME_DURATION) {
    console.log(`Congratulations, ${name}!`);
    break;
  } else {
    console.log('Correct!');
  }
}
