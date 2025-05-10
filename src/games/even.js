const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);
  return {
    question: number,
    answer: isEven(number) ? 'yes' : 'no'
  };
};

export { rules as gameRules, generateRound };