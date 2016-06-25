var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/node_modules'))
app.use(express.static(__dirname+'/client'))
app.use(bodyParser.json())

var server = app.listen(3030, function(){
	console.log('its happening on 3030')
})