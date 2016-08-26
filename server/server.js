var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// public directory
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.listen(port, function() {
  console.log('http://localhost:' + port);
});
