import utils from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGCDResult = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  return getGCDResult(num2, num1 % num2);
};

const getQuestionAndAnswer = () => {
  const num1 = utils.getRandomInt(100);
  const num2 = utils.getRandomInt(100);

  const question = `${num1} ${num2}`;
  const rightAnswer = String(getGCDResult(num1, num2));

  return { question, rightAnswer };
};

const data = { gameRules, getQuestionAndAnswer };

const runGame = () => {
  runEngine(data);
};

export default runGame;
