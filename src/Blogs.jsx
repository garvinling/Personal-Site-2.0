import React, { Component } from 'react';
import './css/Blogs.css';
import Loading from './Loading';
import BlogItem from './BlogItem';

class Blogs extends Component {

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

    var blogs = this.props.feed.map((obj,idx) => {

        return <BlogItem key={idx} title={obj.title} url={obj.url} date={obj.date} tags={obj.tags}/>

    });


    return blogs;

  }


  render() {
    return (
      

      <div className="activity-container">

            <div className="title-container">
                <h1 className="section-header">{this.props.title}</h1>
            </div>


            <div className="activity-feed">
              {this.displayFeed()}
            </div>


      </div>


    );
  }
}

export default Blogs;
