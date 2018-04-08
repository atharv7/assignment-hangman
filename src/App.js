import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GameBoard} from './containers/GameBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="favicon.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Hang that man!</h1>
        </header>
        <p className="App-intro">
          ...coz he dumb AF
        </p>
        <GameBoard />
      </div>
    );
  }
}

export default App;
