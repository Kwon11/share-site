import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const url = "https://cngh.adj.st"
// const url = "https://share.plexchat.com/7HF57"
// const url = "http://goo.gl/xPQjhV"

// 7HF57
// 53c31860-b5cc-11e7-81ea-4d1634d121b8  -- public room
// 1c520520-669f-11e7-ad69-9ba6bed4c60f  -- members room

// const url = "https://app.adjust.com/?deep_link="
// const url = "https://app.adjust.com/p5xfpy?deeplink=plexchat%3A%2F%2F%3FspaceInviteCode=7HF57";

const arrayOfURL = [
  // "http://192.168.7.168:3001/7HF57",
  // "http://192.168.7.168:3001/7HF57/",
  // "http://192.168.7.168:3001/7HF57/asdf",
  // "http://192.168.7.168:3001/7HF57/01dbdbe0296",
  // "http://192.168.7.168:3001/7HF57/01dbdbe3296",
  // "https://share.plexchat.com/7HF57",
  // "https://share.plexchat.com/7HF57/53c318601ea",
  {label: 'room link', url: "http://192.168.7.168:3001/P8NL5/8815ac60cbf" },
  {label: 'plex link', url: "http://192.168.7.168:3001/P8NL5" },
  {label: 'bad plex link', url: "http://192.168.7.168:3001/P9NL3"},
  {label: 'plex link with slash', url: "http://192.168.7.168:3001/P8NL5/" },
  {label: 'bad room link (should be filtered by server)', url: "http://192.168.7.168:3001/P8NL5/2342" },
  {label: 'bad room link (will be sent to app, should go to plex)', url: "http://192.168.7.168:3001/P8NL5/8823949ab83" },
];

class App extends Component {

  getListOfURL () {
    return arrayOfURL.map((element) => {
      return (
        <p className="App-intro">
          <div>
           {element.label}
          </div>
          <a href={element.url}>
            {element.url}
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
