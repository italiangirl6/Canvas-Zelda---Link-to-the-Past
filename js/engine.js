
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
            // Actions carried out each tick (aka frame)
            zelda.stageUpdate();
            // Initiate Collision
            window.addEventListener("Collide", zelda.collision());

             if (!event.paused) {
                 // Actions carried out when the Ticker is not paused.
             }
		}
	},
    stageUpdate: function(){
        stage.update();
    },
	controls: function() {
	// Dependant controls.js
	window.addEventListener("keydown", checkKeyDown);
	window.addEventListener("keypress", checkKeyPress);
	window.addEventListener("keyup", checkKeyUp);
	},
	stageSetup: function(){
	// Setup Variables
    var stage, TileSets, HeroPlay0, Hearts0, Hearts1, Hearts1,
    MagicBarContainerTop, MagicBarContainerBottom;

    // TileSets
    var tile, map1, mapTiles, game, mapWidth, mapHeight, tileSheet,
        tiles, cellBitmap;

    // Link
    var HeroXCoordinates, HeroYCoordinates;

    // Collision
    var collisionTest;
    var collisionTestX, collisionTestY;
	},
	stageLoad: function(){
        	stage.addChild(HeroPlay0, Hearts0, Hearts1, Hearts2,
        	 MagicBarContainerTopLeft, MagicBarContainerTopRight,
        	 MagicBarContainerMiddleLeft, MagicBarContainerMiddleRight,
        	 MagicBarContainerMiddleLeft0, MagicBarContainerMiddleRight0,
        	 MagicBarContainerBottomLeft, MagicBarContainerBottomRight,

        	 SelectedItemTopLeftSprite, SelectedItemTopRightSprite,
        	 SelectedItemBottomLeftSprite, SelectedItemBottomRightSprite,
        	 SelectedItem,

        	 LifeHeaderText, RubyCountText, BombCountText, ArrowCountText,
        	 RubyItemHeaderSprite, BombItemHeaderSprite, ArrowItemHeaderSprite);

        	 // Header Counts
        	 var rubyCount, bombCount;


        	 // Positioning (Currently drop Item only
        	 var rand_no, rand_no2;

	},
	stageHeader: function(){
	     // Styling
	     var fontType   = "Return of Ganon";
	     var fontColor  = "#FFF";
	     var fontSize   = 16;
	     var fontSize1  = 20;

	     // Header Life
         LifeHeaderText = new createjs.Text("------- Life -------", fontSize1 + "px " + fontType, fontColor);
    	 LifeHeaderText.x = 336;
    	 LifeHeaderText.y = 9;

         // Header Rubies Text
          rubyCount = 869;
         RubyCountText = new createjs.Text(rubyCount, fontSize + "px " + fontType, fontColor);
         RubyCountText.x = 116;
         RubyCountText.y = 29;

         // Header Bombs Text
         bombCount = 10;
         BombCountText = new createjs.Text(bombCount, fontSize + "px " + fontType, fontColor);
         BombCountText.x = RubyCountText.x + 46;
         BombCountText.y = RubyCountText.y;

         // Header Arrows Text
         var ArrowCount = 69;
         ArrowCountText = new createjs.Text(bombCount, fontSize + "px " + fontType, fontColor);
         ArrowCountText.x = BombCountText.x + 38;
         ArrowCountText.y = RubyCountText.y;

         // Load Magic Bar Container:
         Load_MagicBarContainer(0, 0);

         // Load Item Selected Container
         LoadHeader_ItemContainer();

         // Load Item Header Icons
         LoadHeader_ItemsCounters();

         // engine.js & characters.js - How Main Character is Printed & Walks
         HeroPlay0 = new createjs.Sprite(Hero0Sprite, "Hero0WalkIdleDown");

         // headers.js - Hearts Section
         Hearts0 = new createjs.Sprite(HeroSpriteHearts0, "HeartFull");
         Hearts1 = new createjs.Sprite(HeroSpriteHearts1, "HeartHalf");
         Hearts2 = new createjs.Sprite(HeroSpriteHearts2, "HeartEmpty");

         // TEMP

	},
	collision: function(collisionEvent){
//	console.log("Scanning for Collision. . ." + DropSpecificItem);



	     // Drop Objects
	     var acceptibleRadius = 6;
	     switch(collisionTest){
	        case "Ruby50":
	        case "Ruby100":
	        case "Ruby300":
                console.log("Collision Event Success");
                    if(HeroPlay0.x.between((rand_no - acceptibleRadius), rand_no) || HeroPlay0.x.between((rand_no + acceptibleRadius), rand_no) &&
                     HeroPlay0.y.between((rand_no2 - acceptibleRadius), rand_no2) || HeroPlay0.y.between((rand_no2 + acceptibleRadius), rand_no2)){
                        console.log("SCORE!");
                      stage.removeChild(DropSpecificItem);

                        // Update Rupee Wallet -
                        // This handles 50, 100, 300
                        if(collisionTest == "Ruby50") {
                        rubyCount = rubyCount + 50;
                        } else if(collisionTest == "Ruby100"){
                        rubyCount = rubyCount + 100;
                        } else if(collisionTest == "Ruby300"){
                        rubyCount = rubyCount + 300;
                        }

                        if(rubyCount >= 999){
                        rubyCount = 999;
                        RubyCountText.text = rubyCount;
                        zelda.stageUpdate();
                        } else {
                        RubyCountText.text = rubyCount;
                        zelda.stageUpdate();
                        }

                    }
	        break;
	        case "Bomb0":
                console.log("Collision Event Success");
                if(HeroPlay0.x.between((rand_no - acceptibleRadius), rand_no) || HeroPlay0.x.between((rand_no + acceptibleRadius), rand_no) &&
                HeroPlay0.y.between((rand_no2 - acceptibleRadius), rand_no2) || HeroPlay0.y.between((rand_no2 + acceptibleRadius), rand_no2)){
                console.log("SCORE!");
                stage.removeChild(DropSpecificItem);

                // Update Bomb Wallet -
                // This handles 1
                if(collisionTest == "Bomb0") {
                bombCount = bombCount + 1;
                    if(bombCount >= 20){
                    bombCount = 20;
                    BombCountText.text = bombCount;
                    zelda.stageUpdate();
                    } else {
                    BombCountText.text = bombCount;
                    zelda.stageUpdate();
                    }
                }
	        break;


	     }
	     }
	     if (typeof collisionTest === 'undefined' || DropSpecificItem === null) {

             // variable is undefined
//             console.log("DropSpecificItem not found");
         } else if(collisionTest == "Ruby50"){



         }

	},
    stageTilesets: function(){
        console.log("Setting up Stage");

        var ObjectsPath = "./img/tilesets/MISC.png";
        var mapData = {"height":18,
                       "layers":[
                              {
                               "data":[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                               "height":18,
                               "name":"Grass",
                               "opacity":1,
                               "type":"tilelayer",
                               "visible":true,
                               "width":23,
                               "x":0,
                               "y":0
                              },
                              {
                               "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42, 43, 43, 43, 43, 43, 43, 43, 43, 44, 45, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 62, 0, 0, 0, 0, 0, 0, 0, 0, 64, 65, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 84, 85, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 85, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 104, 105, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 124, 125, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 104, 104, 122, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 124, 124, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 144, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 0, 0],
                               "height":18,
                               "name":"Wall",
                               "opacity":1,
                               "type":"tilelayer",
                               "visible":true,
                               "width":23,
                               "x":0,
                               "y":0
                              },
                              {
                               "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 23, 23, 23, 23, 23, 23, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23],
                               "height":18,
                               "name":"Bush",
                               "opacity":1,
                               "type":"tilelayer",
                               "visible":true,
                               "width":23,
                               "x":0,
                               "y":0
                              },
                              {
                               "data":[9, 10, 11, 12, 5, 6, 7, 8, 9, 10, 11, 12, 13, 5, 6, 7, 8, 9, 10, 11, 12, 5, 6, 29, 30, 31, 32, 25, 26, 27, 28, 29, 30, 31, 32, 33, 25, 26, 27, 28, 29, 30, 31, 32, 25, 26, 49, 50, 51, 52, 53, 0, 47, 48, 49, 50, 51, 52, 53, 0, 0, 47, 48, 49, 50, 51, 0, 0, 0, 69, 70, 71, 72, 73, 0, 67, 68, 69, 70, 71, 72, 73, 0, 0, 67, 68, 69, 70, 71, 0, 0, 0, 89, 90, 91, 92, 93, 0, 87, 88, 89, 90, 91, 92, 93, 0, 0, 0, 88, 89, 90, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               "height":18,
                               "name":"Trees",
                               "opacity":1,
                               "type":"tilelayer",
                               "visible":true,
                               "width":23,
                               "x":0,
                               "y":0
                              },
                              {
                               "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               "height":18,
                               "name":"Rocks",
                               "opacity":1,
                               "type":"tilelayer",
                               "visible":true,
                               "width":23,
                               "x":0,
                               "y":0
                              }],
                       "orientation":"orthogonal",
                       "properties":
                          {

                          },
                       "tileheight":32,
                       "tilesets":[
                              {
                               "firstgid":1,
                               "image":ObjectsPath,
                               "imageheight":400,
                               "imagewidth":640,
                               "margin":0,
                               "name":"MISC",
                               "properties":
                                  {

                                  },
                               "spacing":0,
                               "tileheight":32,
                               "tilewidth":32,
                               "transparentcolor":"#00ff00"
                              }],
                       "tilewidth":32,
                       "version":1,
                       "width":23
                      }
        var row, col, tiles, tileClone, tileIndex, defineTile, board;

        tiles = new Image();
        tiles.src = ObjectsPath;


        // Dimensions need to come first before initLayers
        // mapWidth = map1[0].length;
        // console.log("mapwidth: " + mapWidth);
        // mapHeight = map1.length;

        // load layers after tileset loaded
        tiles.onLoad = initLayers();

        function initLayers() {
            // compose EaselJS tileset from image (fixed 64x64 now, but can be parametized)
            var w = mapData.tilesets[0].tilewidth;
            var h = mapData.tilesets[0].tileheight;
            var imageData = {
                images : [ tiles ],
                frames : {
                    width : w,
                    height : h
                }
            };
            // create spritesheet
            var tilesetSheet = new createjs.SpriteSheet(imageData);
            // loading each layer at a time
            for (var idx = 0; idx < mapData.layers.length; idx++) {
                var layerData = mapData.layers[idx];
                if (layerData.type == 'tilelayer')
                initLayer(layerData, tilesetSheet, mapData.tilewidth, mapData.tileheight);
            }
             mapWidth = layerData.width;
             mapHeight = layerData.height;
        }


      }

};
// layer initialization
function initLayer(layerData, tilesetSheet, tilewidth, tileheight) {
    for ( var y = 0; y < layerData.height; y++) {
        for ( var x = 0; x < layerData.width; x++) {
            // create a new Bitmap for each cell
            cellBitmap = new createjs.Sprite(tilesetSheet);

            // layer data has single dimension array
            var idx = x + y * layerData.width;
            // tilemap data uses 1 as first value, EaselJS uses 0 (sub 1 to load correct tile)
            cellBitmap.gotoAndStop(layerData.data[idx] - 1);
            // orthogonal tile positioning based on X Y order from Tiled
            cellBitmap.x = (x * tilewidth - x);
            cellBitmap.y = (y * tileheight);

            // Pan X & Y
            // X Minus Pans Right
            // Y Minus Pans Down
            cellBitmap.x = cellBitmap.x - 130;
            cellBitmap.y = cellBitmap.y - 25;

            // Scale to make tilesets larger
            // Experimental and does not work
            // cellBitmap.scaleX = 2;
            // cellBitmap.scaleY = 2;

            // isometrix tile positioning based on X Y order from Tiled
            // cellBitmap.x = 300 + x * tilewidth/2 - y * tilewidth/2;
            // cellBitmap.y = y * tileheight/2 + x * tileheight/2;

            // Add bitmap to stage
            stage.addChild(cellBitmap);
        }
    }
}

// CONSOLE STATS
var zeldaDebugger = {

    // Link
    ConsoleLinkPosition: function(){
    console.log("Char X: " + HeroXCoordinates + "\n" +
        "Char Y: " + HeroYCoordinates);

    },
    // Capture the XY Path of DropSpecificItem
    ConsoleDropSpecificItem: function(){
    console.log("DroppedItem Y: " + DropSpecificItem + "\n" +
                "Char X: " + DropSpecificItem);
    }
}
    // Map
function ConsoleMapPosition(){
console.log("Map Width: " + mapWidth + "\n" +
            "Map Height: " + mapHeight);
}
    // Link
function ConsoleLinkPosition(){
console.log("Char Y: " + HeroYCoordinates + "\n" +
            "Char X: " + HeroXCoordinates);
}

// Find the range between two numbers
Number.prototype.between = function(first,last){
    return (first < last ? this >= first && this <= last : this >= last && this <= first);
}
