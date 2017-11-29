import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const url = "https://cngh.adj.st"
// const url = "https://share.plexchat.com/7HF57"
// const url = "http://goo.gl/xPQjhV"

// 7HF57
// 53c31860-b5cc-11e7-81ea-4d1634d121b8  -- public room
// 1c520520-669f-11e7-ad69-9ba6bed4c60f  -- members room
// "1a9fb2f01f3" -- staging auto join room link room
// const url = "https://app.adjust.com/?deep_link="
// const url = "https://app.adjust.com/p5xfpy?deeplink=plexchat%3A%2F%2F%3FspaceInviteCode=7HF57";

// const url = '192.168.7.168';
const url = "share.plexchat.com";
// const url = '192.168.1.3';

const arrayOfURL = [
  {label: 'chat prod plex link', url: `http://${url}/9ZVEW/`},
  {label: 'chat prod room link', url: `http://${url}/9ZVEW/9f49f6309e6`},
  {label: 'east room link', url: `http://${url}/2K48X/1a9fb2f01f3`},
  {label: 'east plex link', url: `http://${url}/2K48X`},
  {label: 'east bad room link (should be filtered by server) \n just goes to plex', url: `http://${url}/2K48X/2342`},
  {label: 'east bad room link (will be sent to app, should go to plex)', url: `http://${url}/2K48X/8823949ab83`},
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
          <h1 className="App-title">username: tester</h1>
          <h1 className="App-title">password: test</h1>
        </header>
        {this.getListOfURL()}
      </div>
    );
  }
}

export default App;
