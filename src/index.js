import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

export const runGameEngine = (gameRules, generateRound) => {
  const userName = greetUser();
  console.log(gameRules);

  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = generateRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};