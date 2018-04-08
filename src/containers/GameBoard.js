import React from 'react'
import {NewGameButton,WordDisplayer,StatsDisplayer,GuessForm} from '../components/index'
export class GameBoard extends React.Component {
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
