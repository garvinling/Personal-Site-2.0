import React, { Component } from 'react';
import './css/App.css';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Activity from './Activity';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Hero/>
        <Activity/>
        <Portfolio />
      </div>
    );
  }
}

export default App;
