import readlineSync from 'readline-sync';

const GAME_DURATION = 3;

export default (settings) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(settings.rules);

  for (let i = 1; i <= GAME_DURATION; i += 1) {
    const question = settings.getQuestion();
    console.log(`Question: ${question.description}`);
    const rightAnswer = question.answer;
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== Number(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (i === GAME_DURATION) {
      console.log(`Congratulations, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  settings.getQuestion();
};
