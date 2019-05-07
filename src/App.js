import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <center><img src="https://static1.squarespace.com/static/5a5977a7f43b55eff1588911/t/5c3cc96e6d2a73d481066085/1547487618372/Workshop+DevOps+Desde+Cero.png?format=1500w" /></center>
        </div>
      </div>
    );
  }
}

export default App;
