#!/usr/bin/env node

import gameLogic from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameMechanics = () => {
  const result = {};
  const AMOUNT_OF_NUMBERS = 10;

  const numbers = [];
  const step = getRandomNumber(2, 10);

  for (let i = 0; i < AMOUNT_OF_NUMBERS; i += 1) {
    if (i > 0) {
      numbers.push(numbers[i - 1] + step);
    } else {
      numbers.push(getRandomNumber(1, 10));
    }
  }

  const randomIndex = getRandomNumber(0, numbers.length - 1);

  result.answer = `${numbers[randomIndex]}`;

  numbers[randomIndex] = '..';

  result.description = numbers.join(' ');

  return result;
};

const gameSettings = {
  rules: 'What number is missing in the progression?',
  getQuestion: gameMechanics,
};

gameLogic(gameSettings);
