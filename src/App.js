import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const url = "https://cngh.adj.st"
// const url = "https://share.plexchat.com/7HF57"
// const url = "http://goo.gl/xPQjhV"

// GANES
// 53c31860-b5cc-11e7-81ea-4d1634d121b8  -- public room
// 1c520520-669f-11e7-ad69-9ba6bed4c60f  -- members room

// const url = "https://app.adjust.com/?deep_link="
// const url = "https://app.adjust.com/p5xfpy?deeplink=plexchat%3A%2F%2F%3FspaceInviteCode=7HF57";

const arrayOfURL = [
  "https://share.plexchat.com/GANES",
  "https://share.plexchat.com/GANES/",
  "https://share.plexchat.com/GANES/asdf",
  "https://share.plexchat.com/GANES/53c318601ea",
];

class App extends Component {

  getListOfURL () {
    return arrayOfURL.map((element) => {
      return (
        <p className="App-intro">
          <a href={element}>
            {element}
          </a>
        </p>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.getListOfURL()}
      </div>
    );
  }
}

export default App;
