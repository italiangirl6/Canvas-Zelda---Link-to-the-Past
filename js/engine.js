
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
 		    zelda.stageUpdate();
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
	        var tile, stage, TileSets, HeroPlay0, Hearts0, Hearts1, Hearts1,
            MagicBarContainerTop, MagicBarContainerBottom;

            // TileSets
            var map1, mapTiles, game, mapWidth, mapHeight, tileSheet, tiles;

            var HeroXCoordinates, HeroYCoodinates;
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

	},
	stageHeader: function(){
	     // Header Life
         LifeHeaderText = new createjs.Text("------- Life -------", "20px Return of Ganon", "#ff7700");
    	 LifeHeaderText.x = 336;
    	 LifeHeaderText.y = 9;

         // Header Rubies Text
         var rubyCount = 666;
         RubyCountText = new createjs.Text(rubyCount, "16px Return of Ganon", "#ff7700");
         RubyCountText.x = 116;
         RubyCountText.y = 29;

         // Header Bombs Text
         var bombCount = 10;
         BombCountText = new createjs.Text(bombCount, "16px Return of Ganon", "#ff7700");
         BombCountText.x = RubyCountText.x + 46;
         BombCountText.y = RubyCountText.y;

         // Header Arrows Text
         var ArrowCount = 69;
         ArrowCountText = new createjs.Text(bombCount, "16px Return of Ganon", "#ff7700");
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
	collision: function(){
	     // Drop Objects
	     if (typeof DropSpecificItem === 'undefined' || DropSpecificItem === null) {
             // variable is undefined
             console.log("DropSpecificItem not found");
         } else {

              switch(DropSpecificItem){
                case HeroXCoordinates == DropSpecificItem.x && HeroYCoodinates == DropSpecificItem.y:
                             console.log("GOOOOOOOOOOALLLLLL!");

                break;
              }
         }
	},
    stageTilesets: function(){
     console.log("Setting up Stage");

        var ObjectsPath = "./img/tilesets/MISC.png";
        var tileSize = 32;       // The size of a tile (32×32)
        var rowTileCount = 20;   // The number of tiles in a row of our background
        var colTileCount = 32;   // The number of tiles in a column of our background
        var imageNumTiles = 16;  // The number of tiles per row in the tileset image
        var c = 2;
        var r = 2;
        var mapData = { "height":9,
         "layers":[
                {
                 "data":[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                 "height":9,
                 "name":"Grass",
                 "opacity":1,
                 "type":"tilelayer",
                 "visible":true,
                 "width":23,
                 "x":0,
                 "y":0
                },
                {
                 "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42, 43, 43, 43, 43, 43, 43, 43, 43, 44, 45, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 62, 0, 0, 0, 0, 0, 0, 0, 0, 64, 65, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 84, 85, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 85, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 "height":9,
                 "name":"Wall",
                 "opacity":1,
                 "type":"tilelayer",
                 "visible":true,
                 "width":23,
                 "x":0,
                 "y":0
                },
                {
                 "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 23, 23, 23, 23, 23, 23, 23],
                 "height":9,
                 "name":"Bush",
                 "opacity":1,
                 "type":"tilelayer",
                 "visible":true,
                 "width":23,
                 "x":0,
                 "y":0
                },
                {
                 "data":[9, 10, 11, 12, 5, 6, 7, 8, 9, 10, 11, 12, 13, 5, 6, 7, 8, 9, 10, 11, 12, 5, 6, 29, 30, 31, 32, 25, 26, 27, 28, 29, 30, 31, 32, 33, 25, 26, 27, 28, 29, 30, 31, 32, 25, 26, 49, 50, 51, 52, 53, 0, 47, 48, 49, 50, 51, 52, 53, 0, 0, 47, 48, 49, 50, 51, 0, 0, 0, 69, 70, 71, 72, 73, 0, 67, 68, 69, 70, 71, 72, 73, 0, 0, 67, 68, 69, 70, 71, 0, 0, 0, 89, 90, 91, 92, 93, 0, 87, 88, 89, 90, 91, 92, 93, 0, 0, 0, 88, 89, 90, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 "height":9,
                 "name":"Trees",
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
    mapTiles = {};
            var row, col, tiles, tileClone, tileIndex, defineTile, board;

        if (!board) {
            board = new createjs.Container();
            board.x = 0;
            board.y = 0;
            stage.addChild(board);
        }

        tiles = new Image();
        tiles.src = ObjectsPath;


        // Demensions need to come first before initLayers
//        mapWidth = map1[0].length;
//        console.log("mapwidth: " + mapWidth);
//        mapHeight = map1.length;

                    tileIndex = 0;
                    mapTiles = [];

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
            // stage updates (not really used here)
        //	createjs.Ticker.setFPS(20);
        //	createjs.Ticker.addListener(stage);
        }

        // layer initialization
        function initLayer(layerData, tilesetSheet, tilewidth, tileheight) {
        	for ( var y = 0; y < layerData.height; y++) {
        		for ( var x = 0; x < layerData.width; x++) {
        			// create a new Bitmap for each cell
        			var cellBitmap = new createjs.BitmapAnimation(tilesetSheet);
        			// layer data has single dimension array
        			var idx = x + y * layerData.width;
        			// tilemap data uses 1 as first value, EaselJS uses 0 (sub 1 to load correct tile)
        			cellBitmap.gotoAndStop(layerData.data[idx] - 1);
        			// orthogonal tile positioning based on X Y order from Tiled
        			cellBitmap.x = x * tilewidth - y;
        			cellBitmap.y = y * tileheight;

        			   // Scale to make tilesets larger
//                       cellBitmap.scaleX = 2;
//                       cellBitmap.scaleY = 2;

                    // isometrix tile positioning based on X Y order from Tiled
//                    cellBitmap.x = 300 + x * tilewidth/2 - y * tilewidth/2;
//                    cellBitmap.y = y * tileheight/2 + x * tileheight/2;

        			// add bitmap to stage
        			stage.addChild(cellBitmap);
        		}
        	}
        }

      }

};


