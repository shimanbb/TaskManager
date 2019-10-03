var exports = module.exports = {};

var indexService = require('../Services/indexService');

exports.handlers = {};

exports.handlers["/index"] = indexService.execute;