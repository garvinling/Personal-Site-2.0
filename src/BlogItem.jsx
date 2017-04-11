import React, { Component } from 'react';
import './css/ActivityItem.css';

class BlogItem extends Component {
  render() {
    return (
      
        <div className="activity-item">
            
            <div className="icon">
                <img src="/img/medium.png" alt="icon" height="20"/>
            </div>

            <div className="activity-timestamp">
                {this.props.date}
            </div>

            <div className="activity-text-1">
                <a rel="noopener noreferrer" target="_blank" href={this.props.url}>{this.props.title}</a>
            </div>

            <div className="activity-text-2">
                {this.props.tags}
            </div>

        </div>


    );
  }
}

export default BlogItem;
