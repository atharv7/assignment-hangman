import React from 'react'
import './WordDisplayer.css'
export class WordDisplayer extends React.Component {
  constructor(props) {
    super(props)
    const words = ['JAVASCRIPT','REACT','REDUX','MICROSOFT','APPLE','CODAISSEUR']
    const gameWord = words[Math.floor(Math.random()*words.length)]
    const gameWordArray = gameWord.split('')
    this.state={
      gameWord: gameWord
    }
  }
  render() {
    return (<div className="WordDisplayerClass">{this.state.gameWord.split('').map(function(letter) {return (letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U')?' '+letter:' _'})}</div>);
  }
}
