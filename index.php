<?php
$name	 = "Canvas Legend of Zelda - A Link to the Past"; 
$version = "0.0.4";
# echo "Canvas Mess!";

?>
<!DOCTYPE html>
<html>
<head>
<title><?php echo $name, " ", $version; ?></title>

<!-- Game Design Engines -->
   <script src="https://code.createjs.com/easeljs-0.8.2.min.js"></script>
   <script src="js/tweenjs.js"></script>

<link href="fonts/LinkToPastFont_Snes.ttf" rel="stylesheet" type="text/css" />
<link href="css/customStyles.css" rel="stylesheet" type="text/css" />

<!-- Headers to Game -->
<script type="text/javascript" src="js/headers.js"></script>
<script type="text/javascript" src="js/TileSetObjects.js"></script>
<script type="text/javascript" src="js/debugger.js"></script>
<script type="text/javascript" src="js/TileSetLand.js"></script>

<script src="js/engine.js"></script>
<script src="js/controls.js"></script>

<!-- Init -->
    <script>

    // Main Character's Default Location
    var playerStartY, HeroYCoordinates = 134;
    var playerStartX, HeroXCoordinates = 136;

    // Set Placeholders
    zelda.stageSetup();

    // For Window events
    var e=window.event || e


// *************** Run Engine ************************************
function init() {

// Load Engine & Ticker
zelda.init();

// *************** Add Objects to Canvas *************************

zelda.stageTilesets();
zelda.stageHeader();

zelda.characterLoad();

// Misc
zelda.camera();
zelda.controls();
}

</script>

<!-- Character Sprites -->
<script type="text/javascript" src="js/characters.js"></script>
</head>
<body onload="init()">
<div id="tinCan">
	<div class="CanvasContainer">
		<div class="GameTitle"><?php echo $name; ?></div>
        <canvas id="myCanvas" width="578" height="550"></canvas>
        <div id="subConsole">
            <button id="debugButton" class="subButtons on" onclick="zeldaDebugger.DebugOn()">Debug</button>
            <button id="removeDebugButton" class="subButtons off" onclick="zeldaDebugger.DebuggerOff()">End Debug</button>
            <button class="subButtons" onclick="zelda.printControls()">Controls</button>
            <div class="GameVersionNumber"><?php echo $version; ?></div>
            <br />
        </div>
	</div>
</div>
<script>

</script>
</body>
</html>
