var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/nivas',function (req,res){
    
    res.sendFile(path.join(__dirname, 'ui', 'nivas.html'));

});

app.get("/myfamily",function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'family.html'));

    
});

app.get("/friends",function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'friends.html'));

});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'photo.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
