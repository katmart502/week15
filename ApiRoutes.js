//two url routes are needed get and post
var friendData = require('../data/friends.js');
var path = require('path');
//Get route with url to display a JSON of all possible friends
var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});
// Post route with url will be used to handle incoming survey results
	app.post('/api/friends', function(req, res){

		var perfectMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var userData = req.body;
		var userName = userData.name;
		var userImage = userData.image;
		var userScores = userData.scores;

		var totalDifference = 0;
// Finding the user's most comptatible friend requires an array 
		for(var i = 0; i < [user1].length-1; i++){
			console.log(user1[i].name);
			totalDifference = 0;
// compare the difference between current user's score against those from other users 
			for(var j = 0; j < 10; j++){
//Add up the differences for the total differences
totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(user1[i].scores[j]));

