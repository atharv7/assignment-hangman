import React from 'react'
import './StatsDisplayer.css'
import { connect } from 'react-redux'

export class StatsDisplayer extends React.Component {
  constructor(props) {
    super(props)
    const wrongGuesses=0;
    const chancesLeft=6;
    this.state={
      wrongGuesses,chancesLeft
    }
  }
  render() {
    return (<div className="StatsDisplayerClass"><center>Wrong Guesses : {this.state.wrongGuesses} | Chances Left : {this.state.chancesLeft}</center></div>);
  }
}

export default connect(null)(StatsDisplayer)
