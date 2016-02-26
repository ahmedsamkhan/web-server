
var middleware ={

	requireAuthentication: function(req,res,next){
		console.log('private route hit');
		next();
	},

	logger:function(req,res,next){
		console.log("Request: "+req.method +'  '+ new Date().toString()+ ' ' +req.originalUrl);
		next();

	}
};


module.exports=middleware;
