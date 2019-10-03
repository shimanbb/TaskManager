var server = module.exports = {};

var http = require('http');
var url = require('url');


server.start = function(route, handlers) {
    http.createServer(function(request, response){   
        var requestUrl = url.parse(request.url,true);

        route(handlers, requestUrl.pathname, response, requestUrl.query);        
    })
    .listen(8080);
};