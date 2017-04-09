import React, { Component } from 'react';
import './css/activity.css';
import ActivityItem from './ActivityItem';
import Loading from './Loading';

class Activity extends Component {

  constructor(props){

    super(props);

    this.displayFeed = this.displayFeed.bind(this);


  }


  displayFeed(){


    if(this.props.feed.length === 0){

      return (
        <div>
        <Loading/>
        <Loading/>
        </div>
      );
    }

    var activities = this.props.feed.map((obj,idx) => {

        return <ActivityItem key={idx} timestamp={obj.timestamp} one={obj.repo} two={obj.action}/>

    });


    return activities;

  }



  render() {
    return (
    	

    	<div className="activity-container">

            <div className="title-container">
                <h1 className="section-header">My Activity Feed </h1>
            </div>


            <div className="activity-feed">
            {this.displayFeed()}
     
            </div>


    	</div>


    );
  }
}

export default Activity;
