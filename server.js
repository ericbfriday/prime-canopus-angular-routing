var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// this MUST be the last route
// only for removing the #! and allowing the refresh to function
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3003, function() {
    console.log('on 3003');
});