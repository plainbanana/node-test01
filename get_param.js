// get GET PARAM
var express = require('express');
var app = express();

app.get('/posts/:id(\\d+)/:name', function(req, res){
	// id portion of the req is available as req.params.id
	// limit id to digits
	res.send('id:' + req.params.id + 'name:' + req.params.name);
	console.log('GET id is : ' + req.params.id);
	console.log('GET name is : ' + req.params.name);
});

app.listen(3000, function(){
	console.log('this app is listening port 3000!')
});