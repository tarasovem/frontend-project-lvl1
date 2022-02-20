#!/usr/bin/env node

import gameLogic from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameMechanics = () => {
  const result = {};
  const number = getRandomNumber(0, 100);

  result.description = `${number}`;
  result.answer = number % 2 === 0 ? 'yes' : 'no';

  return result;
};

const gameSettings = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: gameMechanics,
};

gameLogic(gameSettings);
