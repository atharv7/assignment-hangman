import {MAKE_GUESS} from '../actions/type'
import {gameWordArray} from './displayWordReducer'
const statsReducer = 6;
export default (state=statsReducer, {type,payload} = {}) => {
switch(type) {
  case MAKE_GUESS:

  if(gameWordArray.includes(payload.toUpperCase())) {

  return state;
}
else {
  if(state==1 || state ==0){
  alert('YOU LOST!!')
return 0;
}
else {
  return state-1;
  }
}
    default: return state;
}

}
