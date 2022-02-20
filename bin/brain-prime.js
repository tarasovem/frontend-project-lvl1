#!/usr/bin/env node

import gameLogic from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameMechanics = () => {
  const result = {};
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ];
  const number = getRandomNumber(0, 100);

  result.description = `${number}`;
  result.answer = primeNumbers.indexOf(number) !== -1 ? 'yes' : 'no';

  return result;
};

const gameSettings = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion: gameMechanics,
};

gameLogic(gameSettings);
