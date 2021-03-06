import React, { Component } from 'react';
import './css/Portfolio.css';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {

  constructor(props){

    super(props);


    this.state = {

        projects : [
            {
                projectName : 'Code Meets Coffee',
                projectDescription: 'Code Meets Coffee is a feed of random open source projects pulled from the Github API. Use this as a way to browse through projects or login through Github and your likes will automatically star the repos to your Github profile.',
                imgLink : '/img/projects/videos/CMC.gif'
            },
            {
                projectName : 'Perspective',
                projectDescription: 'A mobile geo-location based photography app built with react-native. Allows users to view popular photo landmarks around them and upload their own version of that location to that landmark feed.',
                imgLink : '/img/projects/videos/Perspective_Vid.gif'
            },
            {
                projectName : 'KP Walk On!',
                projectDescription : 'A dashboard built for the Walk On! clinical trial to help health coaches monitor their patient\'s physical activity.',
                imgLink : '/img/projects/videos/WalkOn.gif'
            },
            {
                projectName : 'KP Project Dashboard',
                projectDescription : 'A project management application for tracking active projects for Kaiser Permanente in the Southern California region.',
                imgLink : '/img/projects/videos/CLP.gif'
            },
            {
                projectName : 'Coffee Display',
                projectDescription : 'A live media feed that pulls in curated content from twitter feeds and user generated content that displays in a scrolling manner above our coffee machine.',
                imgLink : '/img/projects/videos/CoffeeDisplay.gif'
            },
            {
                projectName : 'Facewall',
                projectDescription: 'An animated 6-screen display in our main lobby that cycles through employees in the organization.  This was originally implemented as a video but we later built it into a web application so we can control the content on the facewall much more efficiently.',
                imgLink : '/img/projects/Facewall.jpg'
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
                <div className="col-md-6">
                    <PortfolioItem projectName={this.state.projects[0].projectName} projectDescription={this.state.projects[0].projectDescription} imgLink={this.state.projects[0].imgLink}/>

                </div>
                <div className="col-md-6">
                    <PortfolioItem projectName={this.state.projects[1].projectName} projectDescription={this.state.projects[1].projectDescription} imgLink={this.state.projects[1].imgLink}/>
                </div>
            </div>
            <div className="row portfolio-row">
                <div className="col-md-6">
                    <PortfolioItem projectName={this.state.projects[2].projectName} projectDescription={this.state.projects[2].projectDescription} imgLink={this.state.projects[2].imgLink}/>

                </div>
                <div className="col-md-6">
                    <PortfolioItem projectName={this.state.projects[3].projectName} projectDescription={this.state.projects[3].projectDescription} imgLink={this.state.projects[3].imgLink}/>
                </div>
            </div>
            <div className="row portfolio-row">
                <div className="col-md-6">
                    <PortfolioItem projectName={this.state.projects[4].projectName} projectDescription={this.state.projects[4].projectDescription} imgLink={this.state.projects[4].imgLink}/>

                </div>
                <div className="col-md-6">
                    <PortfolioItem projectName={this.state.projects[5].projectName} projectDescription={this.state.projects[5].projectDescription} imgLink={this.state.projects[5].imgLink}/>
                </div>
            </div>
    	</div>


    );
  }
}

export default Portfolio;
