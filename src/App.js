import React, { Component } from 'react';
import Routes from "./routes"
import './style/homePage/index.scss'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Routes/>
      </div>
    );
  }
}

export default App;
