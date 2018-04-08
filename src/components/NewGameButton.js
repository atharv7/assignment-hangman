import React from 'react'
import './NewGameButton.css'
import { connect } from 'react-redux'

export class NewGameButton extends React.Component {
  render() {
    return (<a href="http://localhost:3000"><button className="NewGameButtonClass">NEW WORD</button></a>);
  }
}

export default connect (null)(NewGameButton)
