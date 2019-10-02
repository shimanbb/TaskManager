var exports = module.exports = {};

exports.execute = function (response, query) {
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write(query);
    response.end();
};