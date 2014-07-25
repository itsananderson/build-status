var express = require('express');
var app = express();

var buildStatus = 'g';

app.get('/', function(req, res) {
    if (req.query.status) {
        buildStatus = req.query.status;
    }
    res.header('Content-Length', buildStatus.length);
    res.end(buildStatus);
});

app.listen(process.env.PORT || 3030);
