var server = module.exports = {};

var http = require('http');

server.start = function() {
    http.createServer(function(request, response){   
        var requestUrl = url.parse(request.url,true);

        route(handlers, requestUrl.pathname, response, requestUrl.query);        
    })
    .listen(8080);
};