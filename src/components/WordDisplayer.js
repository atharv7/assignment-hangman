import React from 'react'
import './WordDisplayer.css'
import { connect } from 'react-redux'

class WordDisplayer extends React.Component {

  render() {
    return (<div className="WordDisplayerClass">{this.props.displayWordReducer}</div>);
  }
}

const mapStateToProps = (reduxState) => {
  return {
    displayWordReducer: reduxState.displayWordReducer
  }
}

export default connect(mapStateToProps)(WordDisplayer)
