var server = module.exports = {};

var http = require('http');

server.start = function() {
    http.createServer(function(request, response){        
        //TO DO
    }).listen(8080);
};