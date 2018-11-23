const readline = require("readline");
const a = require("./ApiConnector.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter a city name, for detailed weather information.", (answer) => {
  //use the answer further for the api

  rl.close();
});

