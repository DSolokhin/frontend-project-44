const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  return {
    question: `${num1} ${num2}`,
    answer: String(findGCD(num1, num2))
  };
};

export { gameRules, generateRound };