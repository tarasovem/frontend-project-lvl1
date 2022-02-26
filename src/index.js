import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runEngine = (data) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (data) {
    console.log(data.gameRules);

    const playRound = (roundNumber) => {
      if (roundNumber > numberOfRounds) {
        return true;
      }

      const { question, rightAnswer } = data.getQuestionAndAnswer();

      console.log(`Question: ${question}`);

      const answer = readlineSync.question('Your answer: ');

      if (answer === rightAnswer) {
        console.log('Correct!');

        return playRound(roundNumber + 1);
      }

      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}`);

      return false;
    };

    const isWinner = playRound(1);

    if (isWinner) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
};

export default runEngine;
