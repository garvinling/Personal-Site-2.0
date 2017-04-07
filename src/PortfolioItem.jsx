import React, { Component } from 'react';
import './css/PortfolioItem.css';
import 'bootstrap/dist/css/bootstrap.css';


class PortfolioItem extends Component {
  render() {
    return (
    	

    	<div className="portfolio-item">

    		<img src="/img/macbook.png" alt="mockup"  height="156"/>
 			
 			<div className="item-info">
	 			<h3 className="project-name">{this.props.projectName}</h3>

	 			<p className="project-summary">
	 			{this.props.projectDescription}
	 			</p>

	 			<div className="btn-container">
	 				<button className="btn-readmore">Read More</button>
	 			</div>
 			</div>


 			<div className="item-footer"></div>

    	</div>


    );
  }
}

export default PortfolioItem;
