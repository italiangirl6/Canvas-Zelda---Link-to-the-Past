// Items Tileset location
var ObjectsPath = "./img/tilesets/Items.png";
TilesetObjects = new createjs.Bitmap({
  "images": [ObjectsPath],
  "frames": {
            "width": 20, "height": 20,
            "count": 147 },
            //
            // Based off hero_charmap.png -- raw has layer of each slide
            // ---------------------------------
 "animations":{
                "Ruby":	[85]
                }
    });
var TileObjects = {


    itemDrop: function (Object, XCoordinates, YCoordinates){
    DropSpecificItem = new createjs.Sprite(TilesetObjects, Object);
    DropSpecificItem.x = XCoordinates;
    DropSpecificItem.y = YCoordinates;
    DropSpecificItem.scaleX = 2;
    DropSpecificItem.scaleY = 2;
    stage.addChild(DropSpecificItem);
    zelda.stageUpdate();

    // Initiate Collision
    zelda.collision();

    }
};