import React from 'react'
import './GuessForm.css'

export class GuessForm extends React.Component {
  onKeyUpHandler(e) {
    alert(e.target.value) //Should update State
    e.target.value=''
  }

  render() {
    return (<input className="GuessFormClass" type="text" placeholder="GUESS HERE" onKeyUp={this.onKeyUpHandler} />);
  }
}
