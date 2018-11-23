const readline = require("readline");
const a = require("./ApiConnector.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter a city name of germany, for detailed weather information.", (answer) => {
  

  rl.close();
});

