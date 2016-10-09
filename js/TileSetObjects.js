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
                "Bomb0":    [16],
                "Ruby50":	[85],
                "Ruby100":  [86],
                "Ruby300":  [87]
                }
    });
var TileObjects = {


    itemDrop: function (Object, XCoordinates, YCoordinates){
    DropSpecificItem = new createjs.Sprite(TilesetObjects, Object);
    DropSpecificItem.x = rand_no;
    DropSpecificItem.y = rand_no2;
    DropSpecificItem.scaleX = 2;
    DropSpecificItem.scaleY = 2;

    // Collision
    collisionTest = Object;
    collisionTestX = DropSpecificItem.x;
    collisionTestY = DropSpecificItem.y;
    console.log("X: " + XCoordinates);
    console.log("Y: " + YCoordinates);

    stage.addChild(DropSpecificItem);
    zelda.stageUpdate();


    }
};