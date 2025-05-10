const gameRules = 'What is the result of the expression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const a = getRandomInt(1, 25)
  const b = getRandomInt(1, 25)
  const operator = ['+', '-', '*'][getRandomInt(0, 2)]

  return {
    question: `${a} ${operator} ${b}`,
    answer: String(calculate(a, b, operator)),
  }
}

export { gameRules, generateRound }
