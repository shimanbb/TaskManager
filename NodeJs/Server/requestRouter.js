var exports = module.exports = {};

exports.route = function (handlers, pathname, response, query) {
    if (typeof handlers[pathname] === 'function') {
        handlers[pathname](response, query);
    }
    else {
        response.writeHeader(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
};