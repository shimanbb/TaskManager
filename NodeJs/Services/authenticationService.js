var dbConnection = require('../db/dbConnection');
var jsonResponseHandler = require('../Server/jsonResponseHandler');

var authenticationService = module.exports = {};

authenticationService.login = function (response, queryString){
    var resultObj = {};
    var callback = '';
    var query = '';
    if(queryString.callback !== undefined){
        callback = queryString.callback;
    }

    if(queryString.username === undefined ||queryString.password === undefined){
        resultObj.error = 1;
        jsonResponseHandler.execute(response, resultObj, callback);
    } else {
        query = "select * from users ";
        query = query + "where username = '" + queryString.username + "' ";
        query = query + "and password = '" + queryString.password + "' ";
    }

    var dataQuery = dbConnection.executeQuery(query,
        function(result) {
            console.log('AuthenticationServiceExecuteResultHandler');
            console.log(result);
            if(result.recordset.length == 1){
                resultObject.error = 0;
                resultObject.resultObject = {};
                resultObject.resultObject.userID = result.recordset[0].userID;
                resultObject.resultObject.username = result.recordset[0].userName;
                resultObject.resultObject.role = result.recordset[0].roleID;
            } else {
                resultObject.error = 1;
            }
            responseHandler.execute(response, resultObject, callback);
        }, function(err){
            console.log('AuthenticationServiceExecuteFailureHandler');
            console.log(err);
            resultObject.error = 1;
            responseHandler.execute(response, resultObject, callback);

        }
    );
};
