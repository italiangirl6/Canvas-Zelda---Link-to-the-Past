
// Items Tileset location
var ItemsPath = "./img/tilesets/Items.png";


// *************** Magic Bar***********************
	var BarY = 1;
	var BarX = -16;
	SpriteMagicBar = new createjs.SpriteSheet({
	  "images": [ItemsPath],
      "frames": {"regX": BarX, "regY": BarY, 
     			"width": 20, "height": 20,
     			"count": 147 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"BarContainerTopLeft":	[93],
     				"BarContainerTopRight": [94],
     				"BarContainerMiddleLeft": [119],
     				"BarContainerMiddleRight": [120],
     				"BarContainerBottomLeft": [145],
     				"BarContainerBottomRight": [146]
     				}
     	});
     	
     	
     	function Load_MagicBarContainer(MoveBarX, MoveBarY){
     	
     	     // Magic Bar
     var MagicBarMoveY = MoveBarY;
     var MagicBarMoveX = MoveBarX;
     var MagicBarPositionY	= 20; // This should never change
     var MagicBarRightX		= 20; // This should never change
     var MagicBarPositionX = 0;
     
     // Top
     MagicBarConatinerTopLeft = new createjs.Sprite(SpriteMagicBar, "BarContainerTopLeft");
     MagicBarConatinerTopLeft.y = (MagicBarConatinerTopLeft.y + MagicBarPositionY) + MagicBarMoveY;
     MagicBarConatinerTopLeft.x = MagicBarPositionX + MagicBarMoveX;
     
     MagicBarConatinerTopRight = new createjs.Sprite(SpriteMagicBar, "BarContainerTopRight");
     MagicBarConatinerTopRight.y = (MagicBarConatinerTopRight.y + MagicBarPositionY) + MagicBarMoveY;
     MagicBarConatinerTopRight.x =  (MagicBarConatinerTopLeft.x) + MagicBarRightX;
      
     
     // Middle 1
     MagicBarConatinerMiddleLeft = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleLeft");
     MagicBarConatinerMiddleLeft.y = MagicBarConatinerTopLeft.y + MagicBarPositionY;
     MagicBarConatinerMiddleLeft.x = MagicBarConatinerTopLeft.x;
     MagicBarConatinerMiddleRight = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleRight");
     MagicBarConatinerMiddleRight.y = MagicBarConatinerTopRight.y + MagicBarPositionY;
     MagicBarConatinerMiddleRight.x = MagicBarConatinerTopRight.x;
     
     // Middle 2
     MagicBarConatinerMiddleLeft0 = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleLeft");
     MagicBarConatinerMiddleLeft0.y = MagicBarConatinerMiddleLeft.y + MagicBarPositionY;
     MagicBarConatinerMiddleLeft0.x = MagicBarConatinerTopLeft.x;
     MagicBarConatinerMiddleRight0 = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleRight");
     MagicBarConatinerMiddleRight0.y = MagicBarConatinerMiddleRight.y + MagicBarPositionY;
     MagicBarConatinerMiddleRight0.x = MagicBarConatinerTopRight.x;
     
     // Bottom
     MagicBarConatinerBottomLeft = new createjs.Sprite(SpriteMagicBar, "BarContainerBottomLeft");
     MagicBarConatinerBottomLeft.y = MagicBarConatinerMiddleLeft0.y + MagicBarPositionY;
     MagicBarConatinerBottomLeft.x = MagicBarConatinerTopLeft.x;
     MagicBarConatinerBottomRight = new createjs.Sprite(SpriteMagicBar, "BarContainerBottomRight");
     MagicBarConatinerBottomRight.y = MagicBarConatinerMiddleRight0.y + MagicBarPositionY;
     MagicBarConatinerBottomRight.x = MagicBarConatinerTopRight.x;
     	
     	}

// *************** Selected Item ***********************
	var BarY = 1;
	var BarX = -16;
	
	// Selected Item Container
	HeroSpriteSelectedItemContainer = new createjs.SpriteSheet({
	  "images": [ItemsPath],
      "frames": {"regX": BarX, "regY": BarY, 
     			"width": 20, "height": 20,
     			"count": 147 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"SelectedItemContainerTopLeft":	[95],
     				"SelectedItemContainerTopRight": [96],
     				"SelectedItemContainerBottomLeft": [121],
     				"SelectedItemContainerBottomRight": [122]
     				}
     	});
     	
	// Selected Item
	HeroSpriteSelectedItem = new createjs.SpriteSheet({
	  "images": [ItemsPath],
      "frames": {"regX": BarX, "regY": BarY, 
     			"width": 20, "height": 20,
     			"count": 147 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"SelectedItem_Shroom": [0],
     				"SelectedItem_EmptyBow": [1],
     				"SelectedItem_BowArrow": [2],
     				"SelectedItem_BlueBoomerang": [13],
     				"SelectedItem_Nothing":	[104]
     				}
     	});
     	
     	function LoadHeader_ItemContainer(){
     		
     		// Top left
     		SelectedItemTopLeftSprite = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItemContainerTopLeft");
     SelectedItemTopLeftSprite.y = MagicBarConatinerTopRight.y + 2;
     SelectedItemTopLeftSprite.x = MagicBarConatinerTopRight.x + 20;

     		// Bottom left
     		SelectedItemBottomLeftSprite = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItemContainerBottomLeft");
     SelectedItemBottomLeftSprite.y = SelectedItemTopLeftSprite.y + 20;
     SelectedItemBottomLeftSprite.x = MagicBarConatinerTopRight.x + 20;
     
     		// Top Right
     		SelectedItemTopRightSprite = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItemContainerTopRight");
     SelectedItemTopRightSprite.y = SelectedItemTopLeftSprite.y;
     SelectedItemTopRightSprite.x = SelectedItemTopLeftSprite.x + 20;
     	
			// Bottom Right
     	    SelectedItemBottomRightSprite = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItemContainerBottomRight");
     SelectedItemBottomRightSprite.y = SelectedItemBottomLeftSprite.y;
     SelectedItemBottomRightSprite.x = SelectedItemBottomLeftSprite.x + 20;
     	
     	
     	// Selected Item Placement
     	SelectedItem = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItem_BlueBoomerang");
     SelectedItem.y = SelectedItemTopLeftSprite.y + 10;
     SelectedItem.x = SelectedItemTopLeftSprite.x + 10;
     SelectedItem.stop();
     	
     	
     	}

// *************** Hearts *************************
	var HeroSpriteHeartsPath = "./img/Hearts.png";
	var HeartY = -30;
	var HeartX = -306;
	HeroSpriteHearts0 = new createjs.SpriteSheet({
	  "images": [HeroSpriteHeartsPath],
      "frames": {"regX": HeartX-9, "regY": HeartY, 
     			"width": 30, "height": 28,
     			"count": 3 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"HeartFull":	[0],
     				"HeartEmpty":	[1],
     				"HeartHalf":	[2]
     				}
     	});
	 HeroSpriteHearts1 = new createjs.SpriteSheet({
	  "images": [HeroSpriteHeartsPath],
      "frames": {"regX": HeartX-36, "regY": HeartY, 
     			"width": 30, "height": 28,
     			"count": 3 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"HeartFull":	[0],
     				"HeartEmpty":	[1],
     				"HeartHalf":	[2]
     				}
     	});
     HeroSpriteHearts2 = new createjs.SpriteSheet({
	  "images": [HeroSpriteHeartsPath],
      "frames": {"regX": HeartX-66, "regY": HeartY, 
     			"width": 30, "height": 28,
     			"count": 3 },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"HeartFull":	[0],
     				"HeartEmpty":	[1],
     				"HeartHalf":	[2]
     				}
     	});