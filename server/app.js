'use strict';
const express                = require('express');
const path                   = require('path');
const https                  = require('https');
const app                    = express();
const request                = require('request');
const Q                      = require('q');
const cors                   = require('cors');
const moment 				 = require('moment');
const MAX_ACTIVITY_FEED_SIZE = 3;
const MAX_BLOG_FEED_SIZE     = 3;
const MAX_BLOG_TAG_SIZE      = 3;


app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.get('*',(req,res) => {

	res.sendFile(path.resolve(__dirname,'..','build','index.html'));

});


app.post('/api/blogs',(req,res) => {
 
	request({
	  uri: "https://medium.com/@garvinling/latest",
	  method: "GET",
	  timeout: 10000,
	  followRedirect: true,
	  headers:{'accept':'application/json'},
	  maxRedirects: 10
	}, function(error, response, body) {

		if(error){

			console.log('Connection error');
			res.send(error);

		} else {

			console.log('OWiher')
			let strippedPosts = body.substring(16,body.length); //stripping ])}while(1);</x> from response

			let result = parseBlogs(JSON.parse(strippedPosts));

			res.send(result);

		}

	});
});



app.post('/api/activity', (req,res) => {


	request({
	  uri: "https://api.github.com/users/garvinling/events",
	  method: "GET",
	  timeout: 10000,
	  followRedirect: true,
	  headers:{'user-agent':'node.js'},
	  maxRedirects: 10
	}, function(error, response, body) {

		if(error){

			console.log('Connection error');
			res.send(error);

		} else {

			parseActivity(JSON.parse(body))
				.then(function(feed){
					console.log('done');
					res.send(feed);

			});

		}

	});




});

function parseBlogs(blogs){

	let blogArray   = [];
	let baseURL     = 'https://medium.com/@garvinling/';
	let posts       = blogs.payload.references.Post;
	let blogCounter = 0;


	for(let p in posts){

		let tagString = buildBlogTags(posts[p].virtuals.tags);
		
		if(posts.hasOwnProperty(p)){

			let blogObject = {

				'title' : posts[p].title,
				'url'   : `${baseURL}${posts[p].slug}-${p}`,
				'date'  : moment(posts[p].createdAt).format('L'),
				'tags'  : tagString

			};

			blogArray.push(blogObject);
			console.log(blogObject);
			blogCounter++;

	
		}
	}

	if(blogCounter > MAX_BLOG_FEED_SIZE){

		blogArray = blogArray.slice(0 , MAX_BLOG_FEED_SIZE);		//keeping only the most recent blogs

	}

	return blogArray;

}



function buildBlogTags(tags){

	// console.log(tags);
	let tagCounter = 0;
	let tagString  = '';

	for(let i = 0; i < tags.length; i++){

		tagString += `${tags[i].slug}`;
		tagCounter++;
		if(tagCounter === MAX_BLOG_TAG_SIZE){

			return tagString;

		}

		tagString+=',';		

	}


}

function parseActivity(activityFeed){
	
	var deferred    = Q.defer();
	var activities  = [];
	var feedCounter = 0;
	var time;
	var activity;


	for(let i = 0; i < activityFeed.length; i++){

		let item = activityFeed[i];

		if(item.type === 'PullRequestEvent' && item.payload.action === 'opened'){

			time = parseTimeStamp(item.created_at);

			activity = {

				repo:item.repo.name,
				action:item.payload.pull_request.title,
				timestamp:time


			};

			activities.push(activity);
			feedCounter +=1;  

			if(feedCounter === MAX_ACTIVITY_FEED_SIZE || feedCounter === activityFeed.length - 1){

				deferred.resolve(activities);
				i = activityFeed.length;
			}

		}
	}


	return deferred.promise;

}


function parseTimeStamp(timestamp){

	var dateArray      = timestamp.split('-');
	return `${dateArray[1]}/${dateArray[2].substring(0,2)}/${dateArray[0]}`;  //might change this to x days ago


}

module.exports = app;















