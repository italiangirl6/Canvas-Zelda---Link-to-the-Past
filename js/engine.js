var zelda = {

    // *************** Run Engine

    camera: function(){
            rectangle = new createjs.Shape();
            bullseye = new createjs.Shape();
            var shiftCircleXY = 42.6;
            var composure = 186;
            var offShift = 19;

            // Camera should stay hidden from player
            // Used for enemies to detect link near by
            // Pan screen when at spot on canvas
            displayCamera = false;

            rectangle.graphics
                           .beginStroke("#FFF")
                           .setStrokeStyle(2)
                           .setStrokeDash([18,10], 1)
                           .drawRect(0, 0, composure, composure)
                           .endStroke();
              //Set position of Shape instance.
                    rectangle.x = HeroXCoordinates / 2 + offShift;
                    rectangle.y = HeroYCoordinates / 2 + offShift;

            // Horizontal
           bullseye.graphics
                        .beginStroke("#FFF")
                        .setStrokeStyle(2)
                        .moveTo(composure - 13, (rectangle.y / 2) + 42)
                        .lineTo(13, (rectangle.y / 2) + 42)
                        .endStroke();

            // Verticle
            bullseye.graphics
                        .beginStroke("#FFF")
                        .setStrokeStyle(2)
                        .moveTo(92, composure - 13)
                        .lineTo((rectangle.x / 2) + 49, 13)
                        .endStroke();
           bullseye.x = rectangle.x;
           bullseye.y = rectangle.y;
           stage.addChild(rectangle, bullseye);
           if(!displayCamera){
                rectangle.visible = false;
                bullseye.visible = false;
           } else {}
    },

	characterLoad: function(){
        HeroPlay0.x = HeroXCoordinates;
        HeroPlay0.y = HeroYCoordinates;

        stage.addChild(HeroPlay0);
	},

	collision: function(collisionEvent){
//	console.log("Scanning for Collision. . ." + DropSpecificItem);

	     // Drop Objects
	     var acceptibleRadius = 9;
	     var objectCountUpdated = false;
	     if (typeof collisionTest === 'undefined' || DropSpecificItem === null) {
         } else {
	        switch(collisionTest){
	        case "Ruby50":
	        case "Ruby100":
	        case "Ruby300":
                    if(HeroPlay0.x.between((rand_no - acceptibleRadius), rand_no) || HeroPlay0.x.between((rand_no + acceptibleRadius), rand_no) &&
                     HeroPlay0.y.between((rand_no2 - acceptibleRadius), rand_no2) || HeroPlay0.y.between((rand_no2 + acceptibleRadius), rand_no2)){

                      // Remove item
                      // If character holds still, item will continue to add
                      // Change Drop Object Coordinates to prevent this
                      stage.removeChild(DropSpecificItem);
                      rand_no, rand_no2 = 0;

                        // Update Rupee Wallet -
                        // This handles 50, 100, 300
                        if(!objectCountUpdated){
                            if(collisionTest == "Ruby50") {
                            rubyCount += 50;
                            } else if(collisionTest == "Ruby100"){
                            rubyCount += 100;
                            } else if(collisionTest == "Ruby300"){
                            rubyCount += 300;
                            }

                            if(rubyCount >= 999){
                            rubyCount = 999;
                            RubyCountText.text = rubyCount;
                            zelda.stageUpdate();
                            } else {
                            RubyCountText.text = paddingNumber(rubyCount);
                            zelda.stageUpdate();
                            }
                            // Prevent adding more than once
                            objectCountUpdated = true;
                            collisionTest = null;
                            console.log("SCORE! " + rubyCount);

                        }
                    } else {}

	        break;
	        case "Bomb0":
//                console.log("Collision Event Success");
                if(HeroPlay0.x.between((rand_no - acceptibleRadius), rand_no) || HeroPlay0.x.between((rand_no + acceptibleRadius), rand_no) &&
                HeroPlay0.y.between((rand_no2 - acceptibleRadius), rand_no2) || HeroPlay0.y.between((rand_no2 + acceptibleRadius), rand_no2)){

                    // Remove item
                    // If character holds still, item will continue to add
                    // Change Drop Object Coordinates to prevent this
                    stage.removeChild(DropSpecificItem);
                    rand_no, rand_no2 = 0;


                    // Update Bomb Wallet -
                    // This handles 1
                if(!objectCountUpdated){
                    if(collisionTest == "Bomb0") {
                       paddingNumber(bombCount++);

                     } else {}

                    if(bombCount >= 20){
                         bombCount = 20;
                         BombCountText.text = bombCount;
                         zelda.stageUpdate();
                     } else {
                         BombCountText.text = paddingNumber(bombCount);
                         zelda.stageUpdate();
                     }
                    // Prevent adding more than once
                    objectCountUpdated = true;
                    collisionTest = null;
                    console.log("SCORE! " + rubyCount);
                    }

	            } else {}
	        break;

	     }
         }
	},

    // Adds event listeners for keyboard strokes
	controls: function() {
	// Dependant controls.js
	window.addEventListener("keydown", checkKeyDown);
	window.addEventListener("keypress", checkKeyPress);
	window.addEventListener("keyup", checkKeyUp);
	},

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

            // Check Debug Mode
            if(typeof debugModOn == 'undefined'){
            debugModOn = false;
            addedDebugObjects = false;
            }
            if(debugModOn){

                var targetObject = "Map";
                zeldaDebugger.HighlightObject(targetObject);
            } else  {
            }

             if (!event.paused) {
                 // Actions carried out when the Ticker is not paused.
             }
		}
	},

	// layer initialization -
	// This places the tiles where they should be
	// currentMap
    initLayer: function(layerData, tilesetSheet, tilewidth, tileheight, moveX, moveY) {


        for ( var y = 0; y < layerData.height; y++) {
            for ( var x = 0; x < layerData.width; x++) {

                // create a new Bitmap for each cell
                // you can pan the map using currentMap.parent.x or currentMap.parent.y
                // Keep in mind this will pan everything else so be sure to update xy coordinates to objects
                currentMap = new createjs.Sprite(tilesetSheet);

                // layer data has single dimension array
                var idx = x + y * layerData.width;
                // tilemap data uses 1 as first value, EaselJS uses 0 (sub 1 to load correct tile)
                tileLoad = layerData.data[idx] - 1;
                currentMap.gotoAndStop(tileLoad);

                // orthogonal tile positioning based on X Y order from Tiled
                if(moveX == undefined || moveX == 0){
                    moveX= 0;
                } else {}
                if(moveY == undefined || moveY == 0){
                moveY= 0;
                } else {}
                currentMap.x = (x * tilewidth - x) + moveX;
                currentMap.y = (y * tileheight) + moveY;

                // Pan X & Y
                // X Minus Pans Right
                // Y Minus Pans Down
                 currentMap.x = currentMap.x + -61;
                 currentMap.y = currentMap.y - 22;
//                        mapX = currentMap.x + 56;
//                        mapY = currentMap.y + 17;

//                currentMap.setBounds(mapX, mapY, tilewidth, tileheight);

                spriteContainer.addChild(currentMap);

                // Add bitmap to stage
                stage.addChild(currentMap);

            }
        }

    },

    currentMapPosition: function(xAxis, yAxis){

        //
        //                currentMap.cache(currentMap.x,currentMap.y,tilewidth,tileheight);
        //                currentMap.updateCache();

                        // Pan X & Y
                        // X Minus Pans Right
                        // Y Minus Pans Down
                        currentMap.x = currentMap.x + HeroXCoordinates;
                        currentMap.y = currentMap.y - HeroYCoordinates;

                        if(xAxis > 0){
                            currentMap.x = currentMap.x + xAxis;
                        }

                        // Scale to make tilesets larger
                        // Experimental and does not work
                        // currentMap.scaleX = 2;
                        // currentMap.scaleY = 2;

                        // isometrix tile positioning based on X Y order from Tiled
                        // currentMap.x = 300 + x * tilewidth/2 - y * tilewidth/2;
                        // currentMap.y = y * tileheight/2 + x * tileheight/2;


                        mapX = currentMap.x;
                        mapY = currentMap.y;
    },

    stageUpdate: function(){
//        console.log("Updating Stage");
        stage.update();
    },

    // Set proper variables for stage to load
	stageSetup: function(){

	// Setup Variables
    var stage, TileSets, displayCamera;

     // Header
     var rubyCount, bombCount, Hearts0, Hearts1, Hearts1;
     var MagicBarContainerTop, MagicBarContainerBottom;

     // Positioning (Currently drop Item only)
     var rand_no, rand_no2;

    // TileSets
    var tile, map1, mapTiles, game, mapWidth, mapHeight, tileSheet,
        tiles, currentMap;

    // Link
    var HeroPlay0, HeroXCoordinates, HeroYCoordinates;

    // Collision
    var collisionTest, collisionTestX, collisionTestY;

    // Debug
    var debugModOn, addedDebugObjects = false;

    // Tileset
    var tilesetSheet, currentMap, mapX, mapY, tileLoad;
	},

    // Add or Remove Elements from Stage
	stageLoad: function(ObjectEvent, ObjectName){
        var objectValue;
	    switch(ObjectName){
	        case "magickBar":
	            objectValue = mainVars.magickBar();
	        break;
	        case "selectedItemBar":
	            objectValue = mainVars.selectedItemBar();
            break;
            case "rupeeBombArrowBar":
                objectValue = mainVars.rupeeBombArrowBar();
            break;
	    }

	    if(ObjectEvent == "add"){

            // Loop through Switch Array and add
            for(i = 0; i < objectValue.length; i++){
                stage.addChild(objectValue[i]);
            }

	    } else if(ObjectEvent == "remove") {

            // Some objects are more than one and require array
            // Others do not if not array just remove if array
            // loop and remove all
            if(Array.isArray(objectValue)){
                // Loop through Switch Array and add
                for(i = 0; i <= objectValue.length; i++){
                    console.log(i + ") removing: " + objectValue[i]);
                    stage.removeChild(objectValue[i]);
                }
            } else {
                stage.removeChild(objectValue);
            }

	    } else {
	        console.log("Unhandled Event");
	    }
	    zelda.stageUpdate();

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
          rubyCount = 000;
          rubyCount = rubyCount + rubyCount;
         RubyCountText = new createjs.Text(rubyCount, fontSize + "px " + fontType, fontColor);
         RubyCountText.x = 116;
         RubyCountText.y = 29;

         // Header Bombs Text
         bombCount = 00;
         bombCount = paddingNumber(bombCount);
         BombCountText = new createjs.Text(bombCount, fontSize + "px " + fontType, fontColor);
         BombCountText.x = RubyCountText.x + 46;
         BombCountText.y = RubyCountText.y;

         // Header Arrows Text
         var ArrowCount = 00;
        ArrowCount = paddingNumber(ArrowCount);

         ArrowCountText = new createjs.Text(bombCount, fontSize + "px " + fontType, fontColor);
         ArrowCountText.x = BombCountText.x + 38;
         ArrowCountText.y = RubyCountText.y;

         // Load Magic Bar Container:
         headLoader.Load_MagicBarContainer(0, 0);

         // Load Item Selected Container
         headLoader.LoadHeader_ItemContainer();

         // Load Item Header Icons
         headLoader.LoadHeader_ItemsCounters();

         // engine.js & characters.js - How Main Character is Printed & Walks
         HeroPlay0 = new createjs.Sprite(Hero0Sprite, "Hero0WalkIdleDown");

         // headers.js - Hearts Section
         Hearts0 = new createjs.Sprite(HeroSpriteHearts0, "HeartFull");
         Hearts1 = new createjs.Sprite(HeroSpriteHearts1, "HeartHalf");
         Hearts2 = new createjs.Sprite(HeroSpriteHearts2, "HeartEmpty");

         // TEMP

	},

    stageTilesets: function(moveX, moveY){
//        console.log("Loading Stage Tiles");

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
            tilesetSheet = new createjs.SpriteSheet(imageData);
            spriteContainer = new createjs.Container(tilesetSheet);

            // loading each layer at a time
            for (var idx = 0; idx < mapData.layers.length; idx++) {
                layerData = mapData.layers[idx];
                if (layerData.type == 'tilelayer')
                zelda.initLayer(layerData, tilesetSheet, mapData.tilewidth, mapData.tileheight);
            }
             mapWidth = layerData.width;
             mapHeight = layerData.height;
        }


      },

    printControls: function(){
        var controlsCurrently = "Movement:Arrow Keys\nAttack: Space\n \nDrop Item: p\nFall Link: w";
        alert("Current Controls\n----------------------\n" + controlsCurrently);
    }

};

var mainVars = {
    magickBar: function(){
                return [MagicBarContainerTopLeft, MagicBarContainerTopRight,
                       	                        MagicBarContainerMiddleLeft, MagicBarContainerMiddleRight,
                       	                       MagicBarContainerMiddleLeft0, MagicBarContainerMiddleRight0,
                       	                        MagicBarContainerBottomLeft, MagicBarContainerBottomRight];
    },
    selectedItemBar: function(){
        return [SelectedItemTopLeftSprite, SelectedItemTopRightSprite,
                                SelectedItemBottomLeftSprite, SelectedItemBottomRightSprite,
                                SelectedItem];
    },
    rupeeBombArrowBar: function(){
        return [LifeHeaderText, RubyCountText, BombCountText, ArrowCountText,
                                RubyItemHeaderSprite, BombItemHeaderSprite, ArrowItemHeaderSprite];
    }
};

// Find the range between two numbers - taken from stackoverflow (can't remember where)
Number.prototype.between = function(first,last){
    return (first < last ? this >= first && this <= last : this >= last && this <= first);
}

function paddingNumber(number){
    return (number < 10 ? '0': '') + number;
}
