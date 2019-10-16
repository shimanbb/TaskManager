var mssql = require('mssql');

var dbConnection = module.exports = {};

var config = {
    user: 'test',
    password: 'test',
    server: 'DOOZY',
    database: 'TaskManager',
    port:1433
};

dbConnection.executeQuery = function(query, resultHandler, failureHandler) {

    var connection = new mssql.ConnectionPool(config);
    connection.connect(function(){
        new mssql.Request(connection)
                .query(query)
                .then(resultHandler)
                .catch(failureHandler);
    });
};

