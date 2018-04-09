import React from 'react'
import {NewGameButton,GuessForm,WordDisplayer,StatsDisplayer} from '../components'
class GameBoard extends React.Component {
  render(){
    return (
      <div>
      <NewGameButton />
      <br/>
      <br/>
      <WordDisplayer />
      <br/>
      <StatsDisplayer />
      <br/>
      <GuessForm />
      </div>
    );
  }
}



export default GameBoard
