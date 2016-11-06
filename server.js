var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Dashboard app listening at http://%s:%s', host, port);
});
