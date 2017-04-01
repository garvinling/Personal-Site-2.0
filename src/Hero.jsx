import React, { Component } from 'react';
import './css/hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <div className="name-container">

              <h1>Hello, Im Garvin.</h1>

          </div>  

          <div className="subtitle">
            Located in Pasadena, CA currently doing full-stack web development at Kaiser Permanente.
          </div>

        </div>

      </div>
    );
  }
}

export default Hero;
