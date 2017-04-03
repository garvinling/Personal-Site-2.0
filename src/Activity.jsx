import React, { Component } from 'react';
import './css/activity.css';
import ActivityItem from './ActivityItem';

class Activity extends Component {
  render() {
    return (
    	

    	<div className="activity-container">

            <div className="title-container">
                <h1 className="section-header">My Activity Feed </h1>
            </div>


            <div className="activity-feed">
                <ActivityItem timestamp="3/24/17 3:35 PM" one="garvinling/Personal-Site-2.0" two="initial commit && added sass build scripts"/>
                <ActivityItem timestamp="3/25/17 3:35 PM"  one="garvinling/Personal-Site-2.0" two="initial commit && added sass build scripts"/>
                <ActivityItem timestamp="3/26/17 3:35 PM"  one="garvinling/Personal-Site-2.0" two="initial commit && added sass build scripts"/>

            </div>


    	</div>


    );
  }
}

export default Activity;
