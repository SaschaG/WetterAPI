//add the modules to test
const ApiConnector = require("../ApiConnector.js");

describe("ApiConnector", function(){
	//default timeout is at 500ms, just to make sure it's enough we double it
	beforeEach(function() {
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
	});

	// I am a bid unsure why we need this actually, but without it, 
	//it seems that the timout doesn't reset to 1000 before the next test 
	afterEach(function() {
	    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});


	it(".getForecastByName should get an 404", function(done) {
	    ApiConnector.getForecastByName("tqiubwqbasu")
	    .then(function(result) {
			expect("Expected the ApiConnector.getForecastByName promises to throw an error")
			.toBe("but it did not");
			console.log(result);
			done();
		}, function(err) {

			console.log(err);
			expect(err.cod).toBe("404");
			done();
		});
  	});

  	it(".getForecastByName should get an 200", function(done) {
	    ApiConnector.getForecastByName("Hamburg")
	    .then(function(result) {

	    	console.log(result);
			expect(result.cod).toBe("200");
			
			done();
		}, function(err) {

			console.log(err);
			expect("Expected the ApiConnector.getForecastByName promises to success")
			.toBe("but it did not");
			done();
		});
  	});

});


