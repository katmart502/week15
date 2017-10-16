// html include 2 routes
var path = require('path');
var express = require('express')

module.exports = function(app){
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../survey.html'));
	});
