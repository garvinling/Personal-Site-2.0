import React, { Component } from 'react';
import './css/App.css';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Activity from './Activity';

class App extends Component {

  constructor(props){

  	super(props);
    this.state={

      activities:[]


    }

  	this.retrieveActivityFeed = this.retrieveActivityFeed.bind(this);

    this.retrieveActivityFeed();

  }


  retrieveActivityFeed(){

  	let url = 'http://localhost:9000/api/activity';

  	fetch(url , {
      method: 'POST'
    }).then(function(response){
        
  		  response.json()
          .then(function(res){

            this.setState({activities:res});
        
          }.bind(this));

    }.bind(this));


  }
 

  render() {
    return (
      <div className="App">
        <Hero/>
        <Activity feed={this.state.activities}/>
        <Portfolio />
      </div>
    );
  }
}

export default App;
