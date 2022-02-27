import utils from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElem = utils.getRandomInt(100);
  const delta = utils.getRandomInt(20);
  const amountOfElements = 10;

  const arr = utils.getProgression(firstElem, delta, amountOfElements);

  const hiddenIndex = utils.getRandomInt(amountOfElements);
  let hiddenElem = '..';
  [hiddenElem, arr[hiddenIndex]] = [arr[hiddenIndex], hiddenElem];

  const question = arr.join(' ');
  const rightAnswer = String(hiddenElem);

  return { question, rightAnswer };
};

const gameData = { gameRules, getQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
