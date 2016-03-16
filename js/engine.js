
var zelda = {

// *************** Run Engine
	init: function() {

		// Find Canvas Tag
		stage = new createjs.Stage( "myCanvas");

		// The Tick
		createjs.Ticker.setInterval(11);
		createjs.Ticker.setFPS(11);
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(event) {
 		 stage.update();
		}
	},

	controls: function() {
				
	
	}

};


