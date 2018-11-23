//loading the node.js modules needed
const readline = require("readline");
const ApiConnector = require("./ApiConnector.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//asking the user for input
//right now it is only possible to enter a city of germany via name and there is no input checks
rl.question("Please enter a city name of germany, for detailed weather information:\n", (answer) => {

	ApiConnector.getForecastByName(answer)
    .then(function(result) {

    	console.log(JSON.stringify(result));
	}, function(err) {

		console.log(err);
	});

  rl.close();
});

