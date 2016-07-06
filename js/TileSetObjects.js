// Items Tileset location
var ObjectsPath = "./img/tilesets/Items.png";
TilesetObjects = new createjs.SpriteSheet({
  "images": [ObjectsPath],
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
var TileObjects = {


    itemDrop: function (Object, XCoordinates, YCoordinates){
    DropSpecificItem = new createjs.Sprite(TilesetObjects, Object);
    DropSpecificItem.x = XCoordinates;
    DropSpecificItem.y = YCoordinates;
    stage.addChild(DropSpecificItem);
    zelda.stageUpdate();

    }
};