// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create server
var server = app.listen(8080, function() {
    console.log('Server is running...');
});

// Set up routing
app.get('/', function(req, res) {
    fs.readFile('comment.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});