import React, { Component } from 'react';
import './css/Portfolio.css';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {

  constructor(props){

    super(props);


    this.state = {

        projects : [

            {
                projectName : 'KP Walk On!',
                projectDescription : 'A dashboard built for the Walk On! clinical trial to help health coaches monitor their patient\'s physical activity.'
            },
            {
                projectName : 'CLP',
                projectDescription : 'A project management application for tracking active projects in the Southern California region.'
            },
            {
                projectName : 'Coffee Display',
                projectDescription : 'A live media feed that pulls in curated content from twitter feeds and user generated content that displays in a scrolling manner above our coffee machine.'
            },
            {
                projectName : 'Facewall',
                projectDescription: 'An animated 6-screen display in our main lobby that cycles through employees in the organization.  This was originally implemented as a video but we later built it into a web application so we can control the content on the facewall much more efficiently.',
            },
            {
                projectName : 'Code Meets Coffee',
                projectDescription: 'Code Meets Coffee is a feed of random open source projects pulled from the Github API. Use this as a way to browse through projects or login through Github and your likes will automatically star the repos to your Github profile.',
            },
            {
                projectName : 'Perspective',
                projectDescription: 'A mobile geo-location based photography app built with react-native. Allows users to view popular photo landmarks around them and upload their own version of that location to that landmark feed.',
            },
            {
                projectName : 'Garvinling.com',
                projectDescription: 'A.k.a this website you\'re on right now! Personal portfolio to showcase projects I\'ve worked on or are currently working on.',
            }
            
            
        
        ]




    }


  }


  render() {
    return (
    	

    	<div className="portfolio-container">
    		<div className="title-container">
	    		<h1 className="section-header">My Work</h1>
    		</div>
    		<div className="row portfolio-row">
    			<div className="col-md-4">
    				<PortfolioItem projectName={this.state.projects[0].projectName} projectDescription={this.state.projects[0].projectDescription}/>
    			</div>
    			<div className="col-md-4">
    				<PortfolioItem projectName={this.state.projects[1].projectName} projectDescription={this.state.projects[1].projectDescription}/>
    			</div>
    			<div className="col-md-4">
    				<PortfolioItem projectName={this.state.projects[2].projectName} projectDescription={this.state.projects[2].projectDescription}/>
    			</div>
    		</div>
            <div className="row portfolio-row">
                <div className="col-md-4">
                    <PortfolioItem projectName={this.state.projects[3].projectName} projectDescription={this.state.projects[3].projectDescription}/>
                </div>
                <div className="col-md-4">
                    <PortfolioItem projectName={this.state.projects[4].projectName} projectDescription={this.state.projects[4].projectDescription}/>
                </div>
                <div className="col-md-4">
                    <PortfolioItem projectName={this.state.projects[5].projectName} projectDescription={this.state.projects[5].projectDescription}/>
                </div>
            </div>
    	</div>


    );
  }
}

export default Portfolio;
