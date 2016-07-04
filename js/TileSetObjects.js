// Items Tileset location
var ItemsPath = "./img/tilesets/Items.png";


	TilesetObjects = new createjs.SpriteSheet({
	  "images": [ItemsPath],
      "frames": {
     			"width": 20, "height": 20,
     			"count": 147 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{
     				"Ruby":	[35]
     				}
     	});

    function DropObject(Object, XCoordinates, YCoordinates){
    DropSpecificItem = new createjs.Sprite(TilesetObjects, "Ruby");
    DropSpecificItem.x = XCoordinates;
    DropSpecificItem.y = YCoordinates;

    }
