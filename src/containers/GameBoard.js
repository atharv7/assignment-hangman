import React from 'react'
import { connect } from 'react-redux'
import {NewGameButton,WordDisplayer,StatsDisplayer,GuessForm} from '../components'
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



export default connect(null)(GameBoard)
