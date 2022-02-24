import readlineSync from 'readline-sync';

const GAME_DURATION = 3;

export default (settings) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (settings) {
    console.log(settings.rules);

    for (let i = 1; i <= GAME_DURATION; i += 1) {
      const question = settings.getQuestion();
      console.log(`Question: ${question.description}`);
      const rightAnswer = question.answer;
      let userAnswer = readlineSync.question('Your answer: ');

      if (typeof rightAnswer === 'number' && !Number.isNaN(Number(userAnswer))) {
        userAnswer = Number(userAnswer);
      }

      if (rightAnswer !== userAnswer) {
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
  }
};
