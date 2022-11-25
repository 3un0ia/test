var express = require('express');
var app = express();

app.get("/", function (reeq, res) {
    res.send('Hello World');
})


var server = app.listen(20000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("example app listening at http", host, port)
    })