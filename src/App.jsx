import React, { Component } from 'react';
import './css/App.css';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Activity from './Activity';
import Blog from './Blogs';
import Footer from './Footer';

class App extends Component {

  constructor(props){

  	super(props);
    this.state={

      activities:[],
      blogs:[]


    }

  	this.retrieveActivityFeed = this.retrieveActivityFeed.bind(this);
    this.retrieveBlogPosts = this.retrieveBlogPosts.bind(this);

    this.retrieveActivityFeed();
    this.retrieveBlogPosts();

  }
 
  retrieveBlogPosts(){

    let url ='/api/blogs';


    fetch(url , {
      method: 'POST'
    }).then(function(response){
        
        response.json()
          .then(function(res){

            this.setState({blogs:res});
        
          }.bind(this));

    }.bind(this));



  }


  retrieveActivityFeed(){

  	let url = '/api/activity';

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
        { /** <div className="row activities-container">
          
          <div className="col-md-6">
            <Activity title="My Github Feed" feed={this.state.activities}/>
          </div>

          <div className="col-md-6">
            <Blog title="Recent Blogs" feed={this.state.blogs}/>
          </div>
        </div>
        **/ }

        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
