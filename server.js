var express      	= require('express');
var app         	= express();
var port 			= process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port 3000 or somethign like that.");
});