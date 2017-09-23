import React, { Component } from 'react';
import './css/hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <div className="name-container">
              <h1 className="main-title">Hello, Im Garvin.</h1>
          </div>  

          <div className="subtitle">
          
            Currently in <span className="turbo-red">Seattle, WA</span> building cool stuff for Alexa @ <span className="turbo-red">Amazon</span>.
           
          
          </div>


          <div className="media-links">
            Check out my Github <a target="_blank" rel="noopener noreferrer" href="https://github.com/garvinling">here</a> <br/>
            Sometimes I blog <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@garvinling">here</a> <br/>
            I rarely tweet <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/garvinling">here</a>   <br/>
          </div>

        </div>

      </div>
    );
  }
}

export default Hero;
