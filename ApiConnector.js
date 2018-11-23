const request = require("request");
//&APPID=1207c46e71bb5fe59edc6a44acd5d566
function ApiConnector(){

}

ApiConnector.getForecastByName = function(name){


	return new Promise(function(resolve, reject) {
		var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + name + 
					",DE&APPID=1207c46e71bb5fe59edc6a44acd5d566";
		request({
			url: url,
			method: "GET",
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var result = JSON.parse(body);
				resolve(result);

			} else {
				//you won't believe how much time I lost because I didn't see that
				//body was a string and not an object...
				var result = JSON.parse(body);
				reject(result);
			}
		});
	});
}

module.exports = ApiConnector;




