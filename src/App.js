import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import p5 from 'p5'
import sketch from './sketch'
import mixer from './gif-mixer'
import 'whatwg-fetch';

class App extends Component {
  componentDidMount() {
    // new p5(mixer, this.refs.mixer);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome</h2>
        </div>
        <div ref="mixer" />
        <div id="sketch" ref="sketch" />
      </div>
    );
  }
}

export default App;