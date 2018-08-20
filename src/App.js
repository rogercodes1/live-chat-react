import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(){
    super()
    this.state ={
      endpoint : 'http://localhost:8000'
    }
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint)

    socket.emit('change color', 'red')
  }
  render() {
    const socket = socketIOClient(this.state.endpoint)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
