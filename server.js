var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var port = 3000;




app.use(middleware.logger);

app.get('/',function(req,res){
res.send('Hello Express!');

});

//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(req,res){
res.send('About Us!');
});


app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
	console.log('Server Started:'+port);
});


