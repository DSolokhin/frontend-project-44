import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default function playEvenGame() {
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100); // Для учебных целей (SonarQube)
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
}
