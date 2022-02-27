import utils from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeResult = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const getQuestionAndAnswer = () => {
  const num = utils.getRandomInt(100);

  const question = `${num}`;
  const rightAnswer = getPrimeResult(num) ? 'yes' : 'no';

  return { question, rightAnswer };
};

const data = { gameRules, getQuestionAndAnswer };

const runGame = () => {
  runEngine(data);
};

export default runGame;
