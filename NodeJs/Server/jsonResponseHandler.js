var jsonResponseHandler = module.exports = {};

jsonResponseHandler.execute = function(response, data, callback){
    response.writeHead(200, {"Content-Type": "application/json"});
    var json = JSON.stringify(data);
    if(callback != ''){
        json = callback + "(" + json + ")";
    }
    response.write(json);
    response.end();
};