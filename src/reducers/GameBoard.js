const words = ['javascript','html','react','redux','css']
const gameWord = words[Math.floor(Math.random()*words.length)]
const initialState = [
  {gameWord: gameWord,
  chancesLeft: 6,
  wrongGuesses: 0}
]

export default (state = initialState, { type, payload } = {}) => {
  return state
}
