<?php
$name	 = "Canvas Legend of Zelda - A Link to the Past"; 
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

<link href="fonts/LinkToPastFont_Snes" rel="stylesheet" type="text/css" />
<link href="css/customStyles.css" rel="stylesheet" type="text/css" />

<script src="js/engine.js"></script>
<script src="js/controls.js"></script>

<!-- Headers to Game -->
<script type="text/javascript" src="js/headers.js"></script>

<!-- Init -->
    <script>
    // Load Engine
    zelda.init();
    
    // Load Controls
    zelda.controls();

    // Set Placeholders
    zelda.stageSetup();
        
    // For Window events
    var e=window.event || e

    // Main Character's Default Location
    var playerStartY = -96;
    var playerStartX = -63;

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

// *************** Add Objects to Canvas *************************
zelda.stageHeader();
zelda.stageLoad();
// *************** Listen to Human Actions *************************

		// Dependant controls.js
		 window.addEventListener("keydown", checkKeyDown);
	  // window.addEventListener("keypress", checkKeyPress);
		 window.addEventListener("keyup", checkKeyUp);
		
}

    </script>

	<!-- Character Sprites -->
	<script type="text/javascript" src="js/characters.js"></script>
<script>

</script>
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
