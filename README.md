# WetterAPI

## Discription
This is a smalll Weather App, written with JS, Node and Jasmine.


## Preperations

To start the program you need to install, node and npm.
Node download: https://nodejs.org/en/download/

NPM is installed with Node. To check if it was successfully installed with node you can type the following in the console:

npm -v

for node it is:

node -v


## How to start it

Clone the repository on your machine.
Open your console an move to the WetterAPI folder

* run "npm install" in the console
 	this command should install all necessary modules for the program if one is missing you can install it with npm install module-name

* run "node program.js" in the console, to start the application

* run "npm test" to start the jasmine tests

 
## How to use it

If you start the program, it will ask you to enter a city name. It has to be entered in english. It is assumed that the city is located in germany.

The application, than makes a call towards the https://openweathermap.org/ api and gets a 5 days / 3 hour weather forcast. 

The data is not formated yet, but plain JSON.


## The architecture

* The starting point of the application is program.js
* The API connection is done in APIConnector.js
* The testing is done /spec/testSpec.js



