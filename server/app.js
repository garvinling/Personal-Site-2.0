const express = require('express');
const path    = require('path');
const Github  = require('github-api');
const https   = require('https');
const app     = express();

const github  = new Github();





var garvin = github.getUser('garvinling');
const options = {

	host: 'api.github.com',
	path: '/users/garvinling/events',
	headers:{
		'Content-Type':'application/json'
	}
};



https.get(options,function(res){

	console.log('done');
	console.log(res.statusCode);

});

		


app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.get('*',(req,res) => {

	res.sendFile(path.resolve(__dirname,'..','build','index.html'));

});



app.get('/api/activity', (req,res) => {






	res.send({msg:'lol'});

});





module.exports = app;