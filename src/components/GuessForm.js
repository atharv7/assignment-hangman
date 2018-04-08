import React from 'react'
import './GuessForm.css'
import { connect } from 'react-redux'

export class GuessForm extends React.Component {
  onKeyUpHandler(e) {
    alert(e.target.value) //Should update State
    e.target.value=''
  }

  render() {
    const {gameWord} = this.props
    return (<input className="GuessFormClass" type="text" placeholder="GUESS HERE" onKeyUp={this.onKeyUpHandler} />);
  }
}

export default connect (null)(GuessForm)
