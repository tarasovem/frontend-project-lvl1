import utils from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getCalculationResult = (num1, num2, operator) => {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  }
  if (operator === '-') {
    result = num1 - num2;
  }
  if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const num1 = utils.getRandomInt(100);
  const num2 = utils.getRandomInt(100);
  const operator = operators[utils.getRandomInt(operators.length - 1)];

  console.log('operator', operator);

  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(getCalculationResult(num1, num2, operator));

  return { question, rightAnswer };
};

const data = { gameRules, getQuestionAndAnswer };

const runGame = () => {
  runEngine(data);
};

export default runGame;
