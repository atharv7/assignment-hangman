import React from 'react'
import './GuessForm.css'
import { connect } from 'react-redux'

class GuessForm extends React.Component {
  constructor(props) {
    super(props)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
  }
  onKeyUpHandler(e) {
    this.props.dispatch({type: "MAKE_GUESS" ,payload: e.target.value}) //Should update State
    e.target.value=''
  }

  render() {
    return (<input className="GuessFormClass" type="text" placeholder="GUESS HERE" onKeyUp={this.onKeyUpHandler} />);
  }
}
function mapStateToProps(state) {
  return {
    gameWord: state.gameWord
  }
}
export default connect (mapStateToProps)(GuessForm)
