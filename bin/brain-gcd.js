#!/usr/bin/env node

import gameLogic from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameMechanics = () => {
  const result = {};
  const searchGCD = (x, y) => {
    let num1 = x;
    let num2 = y;
    while (num1 && num2) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }
    num1 += num2;
    return num1;
  };

  let firstNumber = getRandomNumber(0, 100);
  let secondNumber = getRandomNumber(0, 100);

  if (firstNumber === secondNumber) {
    while (firstNumber !== secondNumber) {
      firstNumber = getRandomNumber(0, 100);
      secondNumber = getRandomNumber(0, 100);
    }
  }

  result.description = `${firstNumber} ${secondNumber}`;
  result.answer = searchGCD(firstNumber, secondNumber);

  return result;
};

const gameSettings = {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestion: gameMechanics,
};

gameLogic(gameSettings);
