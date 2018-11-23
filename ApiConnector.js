const request = require("request");

// using an constructor for exporting it as module
function ApiConnector(){

}

//wrapping a promise in a function, so i can pass later arguments towrd it
ApiConnector.getForecastByName = function(name){


	//using promises here, because of the asynch behaviour of node. It is not possible 
	//to use return here
	return new Promise(function(resolve, reject) {
		//the url api call in a variable, because i may need it for logging.
		var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + name + 
					",DE&APPID=1207c46e71bb5fe59edc6a44acd5d566";
		//defining the actual request
		request({
			url: url,
			method: "GET",
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var result = JSON.parse(body);
				//resolving the promise
				resolve(result);

			} else {
				//error handling
				//you won't believe how much time I lost because I didn't see that
				//body was a string and not an object...
				var result = JSON.parse(body);
				reject(result);
			}
		});
	});
}

//exporting it as module, so I can test it in testSpec.js
module.exports = ApiConnector;




