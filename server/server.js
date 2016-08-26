var express = require('express');

var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

// public directory
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../html/index.html'));
});

app.listen(port, function() {
  console.log('http://localhost:' + port);
});
