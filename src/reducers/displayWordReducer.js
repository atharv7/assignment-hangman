const words = ['JAVASCRIPT','REACT','REDUX','MICROSOFT','APPLE','CODAISSEUR']
const gameWord = words[Math.floor(Math.random()*words.length)]
export const gameWordArray = gameWord.split('')

let guessesArray = []
const displayWordReducer = gameWordArray.map(function(letter) {return (letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U')?' '+letter:' _'});
export default (state=displayWordReducer, {type,payload} = {}) => {
switch(type) {
  case 'MAKE_GUESS':
  guessesArray.push(payload.toUpperCase())
if(gameWordArray.includes(payload.toUpperCase())) {
  if(state.filter(x => x === ' _').length == 1) {
    alert("YOU WIN!")
  }
  return gameWordArray.map(function(letter) {return (letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U' ||guessesArray.includes(letter))?' '+letter:' _'})
}
else {
return state;
}
default: return state;
}

}
