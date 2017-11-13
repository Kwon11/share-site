import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const url = "https://cngh.adj.st"
const url = "https://share.plexchat.com/7hf57"
// const url = "http://goo.gl/xPQjhV"

// const url = "https://app.adjust.com/?deep_link="
// const url = "https://app.adjust.com/p5xfpy?deeplink=plexchat%3A%2F%2F%3FspaceInviteCode=7HF57";

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
          <a href={url}>
           {url}
          </a>
        </p>
      </div>
    );
  }
}

export default App;
