import utils from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenResult = (num) => num % 2 === 0 ? 'yes': 'no';

const getQuestionAndAnswer = () => {
  const num = utils.getRandomInt(100);

  const question = `${num}`;
  const rightAnswer = getEvenResult(num);

  return { question, rightAnswer };
};

const data = { gameRules, getQuestionAndAnswer };

const runGame = () => {
  runEngine(data);
};

export default runGame;
