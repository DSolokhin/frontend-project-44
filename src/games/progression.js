const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const gameRules = 'What number is missing in the progression?'

const generateRound = () => {
  const progressionLength = getRandomInt(5, 10)
  const start = getRandomInt(1, 50)
  const step = getRandomInt(1, 10)
  const progression = generateProgression(start, step, progressionLength)

  const hiddenIndex = getRandomInt(0, progression.length - 1)
  const answer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return { question, answer }
}

export { gameRules, generateRound }
