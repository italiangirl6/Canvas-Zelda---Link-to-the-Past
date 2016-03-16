     var HeroSpritePath = "./img/hero_charmap.png";
     Hero0Sprite = new createjs.SpriteSheet({
     "images": [HeroSpritePath],
     "frames": {"regX": playerStartX, "regY": playerStartY, 
     			"width": 50, "height": 70,
     			   },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"Hero0WalkIdleDown":		[0],
     				"Hero0WalkIdleDown_Shield": [1],
     				"Hero0WalkIdleUp":			[2],
     				"Hero0NomNom":				[3],
     				"Hero0Nom":					[4],
     				"Hero0WalkIdleLeft":		[5],
     				"Hero0WalkIdleRight":		[6],
     				"Hero0IdleShitfacedRight":	[7],
     				"Hero0IdleShitfacedLeft":	[8],
     				"Hero0FallWhooooooaaaoowh":	[9],
     				"Hero0WalkDown":			[20, 23],
     				"Hero0WalkLeft":			[27, 32],
     				"Hero0WalkUp": 				[33, 36],
     				"Hero0WalkRight": 			[37, 42]
     				}
     });