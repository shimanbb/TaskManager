var exports = module.exports = {};

var indexService = require('../Services/indexService');
var authenticationService = require('../Services/authenticationService');

exports.handlers = {};

exports.handlers["/index"] = indexService.execute;
exports.handlers["/login"] = authenticationService.login;