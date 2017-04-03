import React, { Component } from 'react';
import './css/ActivityItem.css';

class ActivityItem extends Component {
  render() {
    return (
    	
        <div className="activity-item">
            
            <div className="icon">
                <img src="/img/github-512.png" alt="icon" height="20"/>
            </div>

            <div className="activity-timestamp">
                {this.props.timestamp}
            </div>

            <div className="activity-text-1">
                {this.props.one}
            </div>

            <div className="activity-text-2">
                {this.props.two}
            </div>

        </div>


    );
  }
}

export default ActivityItem;
