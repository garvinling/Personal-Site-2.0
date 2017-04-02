import React, { Component } from 'react';
import './css/App.css';
import Hero from './Hero';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Hero/>
        <Portfolio />
      </div>
    );
  }
}

export default App;
