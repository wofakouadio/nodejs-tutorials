var http = require('http');

http.createServer(function (req, res) {

    res.write('Hello World! This is my first NodeJS App');
    res.end();

}).listen(8080)