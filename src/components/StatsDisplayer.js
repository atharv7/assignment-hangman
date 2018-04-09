import React from 'react'
import './StatsDisplayer.css'
import { connect } from 'react-redux'

class StatsDisplayer extends React.Component {

  render() {
    return (<div className="StatsDisplayerClass"><center>Wrong Guesses : {6 - this.props.statsReducer} | Chances Left : {this.props.statsReducer}</center></div>);
  }
}
const mapStateToProps = (reduxState) => {
  return {
    statsReducer: reduxState.statsReducer
  }
}
export default connect(mapStateToProps)(StatsDisplayer)
