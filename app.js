var express=require('express');
var app=express();

app.set('view engine','ejs');

app.use(express.static(__dirname + '/assets'));

app.get('/',function(req,res){ res.render('index');});

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});