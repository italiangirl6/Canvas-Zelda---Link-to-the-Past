
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
	  // window.addEventListener("keypress", checkKeyPress);
		 window.addEventListener("keyup", checkKeyUp);
	
	},
	stageSetup: function(){
	        var stage, HeroPlay0, Hearts0, Hearts1, Hearts1,
            MagicBarConatinerTop, MagicBarConatinerBottom, ItemDrop;
	},
	stageLoad: function(){
        	stage.addChild(HeroPlay0, Hearts0, Hearts1, Hearts2,
        	 MagicBarConatinerTopLeft, MagicBarConatinerTopRight,
        	 MagicBarConatinerMiddleLeft, MagicBarConatinerMiddleRight,
        	 MagicBarConatinerMiddleLeft0, MagicBarConatinerMiddleRight0,
        	 MagicBarConatinerBottomLeft, MagicBarConatinerBottomRight,

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

	}

};


