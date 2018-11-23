const readline = require("readline");
const ApiConnector = require("./ApiConnector.js");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Please enter a city name of germany, for detailed weather information:\n", (answer) => {
  

	ApiConnector.getForecastByName(answer)
    .then(function(result) {

    	console.log(JSON.stringify(result));
	}, function(err) {

		console.log(err);
	});


  rl.close();
});

