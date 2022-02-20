#!/usr/bin/env node

import gameLogic from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameMechanics = () => {
  const result = {};
  const firstNumber = getRandomNumber(0, 30);
  const secondNumber = getRandomNumber(0, 30);
  const calcType = getRandomNumber(0, 2);

  if (calcType === 0) {
    result.description = `${firstNumber} + ${secondNumber}`;
    result.answer = firstNumber + secondNumber;
  } else if (calcType === 1) {
    if (secondNumber > firstNumber) {
      result.description = `${secondNumber} - ${firstNumber}`;
      result.answer = secondNumber - firstNumber;
    } else {
      result.description = `${firstNumber} - ${secondNumber}`;
      result.answer = firstNumber - secondNumber;
    }
  } else if (calcType === 2) {
    result.description = `${firstNumber} * ${secondNumber}`;
    result.answer = firstNumber * secondNumber;
  }

  return result;
};

const gameSettings = {
  rules: 'What is the result of the expression?',
  getQuestion: gameMechanics,
};

gameLogic(gameSettings);
