import React, { Component } from 'react';
import './css/Portfolio.css';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
  render() {
    return (
    	

    	<div className="portfolio-container">
    		<div className="title-container">
	    		<h1 className="section-header">My Work</h1>
    		</div>
    		<div className="row portfolio-row">
    			<div className="col-md-4">
    				<PortfolioItem/>
    			</div>
    			<div className="col-md-4">
    				<PortfolioItem/>
    			</div>
    			<div className="col-md-4">
    				<PortfolioItem/>
    			</div>
    		</div>
            <div className="row portfolio-row">
                <div className="col-md-4">
                    <PortfolioItem/>
                </div>
                <div className="col-md-4">
                    <PortfolioItem/>
                </div>
                <div className="col-md-4">
                    <PortfolioItem/>
                </div>
            </div>
    	</div>


    );
  }
}

export default Portfolio;
