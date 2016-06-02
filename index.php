<?php
$name	 = "Canvas Mess!"; 
$version = "0.0.1";
# echo "Canvas Mess!";
?>
<!DOCTYPE html>
<html>
<head>
<title>Canvas Mess <?php echo $version; ?></title>

<!-- Game Design Engines -->
   <script src="https://code.createjs.com/easeljs-0.8.0.min.js"></script>
   <script src="https://code.createjs.com/tweenjs-0.6.1.min.js"></script>
	
	    
    	<!-- Fonts -->
	<link href="fonts/LinkToPastFont_Snes" rel="stylesheet" type="text/css" />
	
	<script src="js/engine.js"></script>

<!-- Set Keyboard Controls -->
<script src="js/controls.js"></script>

    <script>
    
    // Load Engine
    zelda.init();
    
    // Load Controls
    zelda.controls();
    
    
        var stage, HeroPlay0, Hearts0, Hearts1, Hearts1,
        MagicBarConatinerTop, MagicBarConatinerBottom,
         action;
        
        // For Window events
        var e=window.event || e
        
        // Main Character's Default Location
        var playerStartY = -96,
        	playerStartX = -63;

// *************** Run Engine
function init() {

// Find Canvas Tag
stage = new createjs.Stage( "myCanvas");

// The Tick
createjs.Ticker.setInterval(11);
createjs.Ticker.setFPS(11);
createjs.Ticker.addEventListener("tick", handleTick);
function handleTick(event) {
  stage.update();
}
// *************** Set Sprites *************************
     
     // Header Life
     LifeHeaderText = new createjs.Text("------- Life -------", "20px Return of Ganon", "#ff7700");
	 LifeHeaderText.x = 336;
	 LifeHeaderText.y = 9;

     // Header Rubies
     var rubyCount = 666;
     RubyCountText = new createjs.Text(rubyCount, "16px Return of Ganon", "#ff7700");
     RubyCountText.x = 116;
     RubyCountText.y = 29;
     
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
 

// *************** Add Objects to Canvas *************************
	stage.addChild(HeroPlay0, Hearts0, Hearts1, Hearts2,
	 MagicBarConatinerTopLeft, MagicBarConatinerTopRight,
	 MagicBarConatinerMiddleLeft, MagicBarConatinerMiddleRight,
	 MagicBarConatinerMiddleLeft0, MagicBarConatinerMiddleRight0,
	 MagicBarConatinerBottomLeft, MagicBarConatinerBottomRight,
	 
	 SelectedItemTopLeftSprite, SelectedItemTopRightSprite,
	 SelectedItemBottomLeftSprite, SelectedItemBottomRightSprite,
	 SelectedItem,
	 
	 LifeHeaderText, RubyCountText, RubyItemHeaderSprite);

// *************** Listen to Human Actions *************************

		// Click Mouse - Change Sprite to walk down	
		// Dependant controls.js
		 window.addEventListener("keydown", checkKeyDown);
	  // window.addEventListener("keypress", checkKeyPress);
		 window.addEventListener("keyup", checkKeyUp);
		
}

    </script>
	
	<!-- Character Sprites -->
	<script type="text/javascript" src="js/characters.js"></script>
	
	<!-- Headers to Game -->
	<script type="text/javascript" src="js/headers.js"></script>
	
	<!-- CSS Crap -->
    <link href="css/customStyles.css" rel="stylesheet" type="text/css" />

	
	
  </head> 
<body onload="init()">
  
<div id="tinCan">
	<div class="CanvasContainer">
		<div class="GameTitle"><?php echo $name; ?></div>
    <canvas id="myCanvas" width="578" height="550"></canvas>
		<div class="GameVersionNumber"><?php echo $version; ?></div>
		<br />
		<!-- <img src="./img/hero_charmap.png"> -->
	</div>
</div>
</body>
</html>
