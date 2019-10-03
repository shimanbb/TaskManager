var server = require('./Server/server');
var requestRouter = require('./Server/requestRouter');
var requestHandler = require('./Server/requestHandler');

server.start(requestRouter.route, requestHandler.handlers);