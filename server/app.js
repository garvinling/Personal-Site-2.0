const express = require('express');
const path    = require('path');
const https   = require('https');
const app     = express();
const request = require('request');
const Q       = require('q');
const cors    = require('cors');


const MAX_ACTIVITY_FEED_SIZE = 2;


request({
  uri: "https://api.github.com/users/garvinling/events",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  headers:{'user-agent':'node.js'},
  maxRedirects: 10
}, function(error, response, body) {

	var res = JSON.parse(body);

	parseActivity(res);

});

app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.get('*',(req,res) => {

	res.sendFile(path.resolve(__dirname,'..','build','index.html'));

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

			res.send(error);

		}
		//fix crash here when fetch fails 
		parseActivity(JSON.parse(body))
			.then(function(feed){
				console.log('done');
				res.send(feed);

			});


	});




});


function parseActivity(activityFeed){

	var deferred = Q.defer();
	var activities = [];
	var feedCounter = 0;
	var time;
	var activity;
	//fix crash here when fetch fails 
	activityFeed.forEach(function(item){


		if(item.type === 'PullRequestEvent' && item.payload.action === 'opened'){

			time = parseTimeStamp(item.created_at);

			activity = {

				repo:item.repo.name,
				action:item.payload.pull_request.title,
				timestamp:time


			};

			activities.push(activity);
			feedCounter +=1;  //TODO fix this loop, only grab 3 events

			if(feedCounter === MAX_ACTIVITY_FEED_SIZE || feedCounter === activityFeed.length - 1){
				console.log(activities.length);
				deferred.resolve(activities);

			}

		}

	});

	return deferred.promise;

}


function parseTimeStamp(timestamp){

	var dateArray      = timestamp.split('-');
	return `${dateArray[1]}/${dateArray[2].substring(0,2)}/${dateArray[0]}`;  //might change this to x days ago


}

module.exports = app;















