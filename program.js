const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter a city name or ZIP-Code, for detailed weather information.", (answer) => {
  //use the answer further for the api

  rl.close();
});