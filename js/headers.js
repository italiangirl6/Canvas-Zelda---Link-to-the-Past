
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
     MagicBarContainerTopLeft = new createjs.Sprite(SpriteMagicBar, "BarContainerTopLeft");
     MagicBarContainerTopLeft.y = (MagicBarContainerTopLeft.y + MagicBarPositionY) + MagicBarMoveY;
     MagicBarContainerTopLeft.x = MagicBarPositionX + MagicBarMoveX;
     
     MagicBarContainerTopRight = new createjs.Sprite(SpriteMagicBar, "BarContainerTopRight");
     MagicBarContainerTopRight.y = (MagicBarContainerTopRight.y + MagicBarPositionY) + MagicBarMoveY;
     MagicBarContainerTopRight.x =  (MagicBarContainerTopLeft.x) + MagicBarRightX;
      
     
     // Middle 1
     MagicBarContainerMiddleLeft = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleLeft");
     MagicBarContainerMiddleLeft.y = MagicBarContainerTopLeft.y + MagicBarPositionY;
     MagicBarContainerMiddleLeft.x = MagicBarContainerTopLeft.x;
     MagicBarContainerMiddleRight = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleRight");
     MagicBarContainerMiddleRight.y = MagicBarContainerTopRight.y + MagicBarPositionY;
     MagicBarContainerMiddleRight.x = MagicBarContainerTopRight.x;
     
     // Middle 2
     MagicBarContainerMiddleLeft0 = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleLeft");
     MagicBarContainerMiddleLeft0.y = MagicBarContainerMiddleLeft.y + MagicBarPositionY;
     MagicBarContainerMiddleLeft0.x = MagicBarContainerTopLeft.x;
     MagicBarContainerMiddleRight0 = new createjs.Sprite(SpriteMagicBar, "BarContainerMiddleRight");
     MagicBarContainerMiddleRight0.y = MagicBarContainerMiddleRight.y + MagicBarPositionY;
     MagicBarContainerMiddleRight0.x = MagicBarContainerTopRight.x;
     
     // Bottom
     MagicBarContainerBottomLeft = new createjs.Sprite(SpriteMagicBar, "BarContainerBottomLeft");
     MagicBarContainerBottomLeft.y = MagicBarContainerMiddleLeft0.y + MagicBarPositionY;
     MagicBarContainerBottomLeft.x = MagicBarContainerTopLeft.x;
     MagicBarContainerBottomRight = new createjs.Sprite(SpriteMagicBar, "BarContainerBottomRight");
     MagicBarContainerBottomRight.y = MagicBarContainerMiddleRight0.y + MagicBarPositionY;
     MagicBarContainerBottomRight.x = MagicBarContainerTopRight.x;
     	
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
     				"SelectedItemContainerBottomRight": [122],
     				"HeaderIconRuby": [123]
     				}
     	});
	ZeldaItems = new createjs.SpriteSheet({
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
	     				"HeaderIconRuby": [97],
	     				"HeaderIconBomb": [98],
	     				"HeaderIconArrow": [99],
	     				"SelectedItemContainerBottomLeft": [121],
	     				"SelectedItemContainerBottomRight": [122],
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
     			//  Using Item.png tileset
     			// ---------------------------------
     "animations":{	
     				"SelectedItem_Shroom": [0],
     				"SelectedItem_EmptyBow": [1],
     				"SelectedItem_BowArrow": [2],
     				"SelectedItem_BlueBoomerang": [13],
     				"SelectedItem_RubyIcon": [99],
     				"SelectedItem_Nothing":	[104]
     				}
     	});
     	
     	function LoadHeader_ItemContainer(){
     		
     		// Top left
     		SelectedItemTopLeftSprite = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItemContainerTopLeft");
     SelectedItemTopLeftSprite.y = MagicBarContainerTopRight.y + 2;
     SelectedItemTopLeftSprite.x = MagicBarContainerTopRight.x + 20;

     		// Bottom left
     		SelectedItemBottomLeftSprite = new createjs.Sprite(HeroSpriteSelectedItemContainer, "SelectedItemContainerBottomLeft");
     SelectedItemBottomLeftSprite.y = SelectedItemTopLeftSprite.y + 20;
     SelectedItemBottomLeftSprite.x = MagicBarContainerTopRight.x + 20;
     
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

     	function LoadHeader_ItemsCounters(){
     		RubyItemHeaderSprite = new createjs.Sprite(ZeldaItems, "HeaderIconRuby");
     		RubyItemHeaderSprite.y = 2;
     		RubyItemHeaderSprite.scaleX = 2;
     		RubyItemHeaderSprite.scaleY = 1.3;
     		RubyItemHeaderSprite.x = MagicBarContainerTopRight.x + 55;
     		RubyItemHeaderSprite.stop();
     		
     		BombItemHeaderSprite = new createjs.Sprite(ZeldaItems, "HeaderIconBomb");
     		BombItemHeaderSprite.y = 2;
     		BombItemHeaderSprite.x = RubyItemHeaderSprite.x + 45;
     		BombItemHeaderSprite.scaleX = 2;
     		BombItemHeaderSprite.scaleY = 1.3;
     		BombItemHeaderSprite.stop();
     		
     		ArrowItemHeaderSprite = new createjs.Sprite(ZeldaItems, "HeaderIconArrow");
     		ArrowItemHeaderSprite.y = 2;
     		ArrowItemHeaderSprite.x = BombItemHeaderSprite.x + 40;
     		ArrowItemHeaderSprite.scaleX = 2;
     		ArrowItemHeaderSprite.scaleY = 1.3;
     		ArrowItemHeaderSprite.stop();
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