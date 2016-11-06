     var HeroSpritePath = "./img/link_charmap.png";
        Hero0Sprite = new createjs.SpriteSheet({
     "images": [HeroSpritePath],
     "frames": {"regX": playerStartX, "regY": playerStartY,
     			"width": 80, "height": 90,
     			   },
     			//
     			// Based off hero_charmap.png -- raw has layer of each slide
     			// ---------------------------------
     "animations":{	
     				"Hero0WalkIdleDown":		[41],
     				"Hero0WalkIdleDown_Shield": [41],
     				"Hero0WalkIdleUp":			[29],
     				"Hero0NomNom":				[3],
     				"Hero0Nom":					[4],
     				"Hero0WalkIdleLeft":		[67],
     				"Hero0WalkIdleRight":		[33],
     				"Hero0IdleShitfacedRight":	[7],
     				"Hero0IdleShitfacedLeft":	[8],
     				"Hero0FallWhooooooaaaoowh":	[81],
     				"Hero0WalkDown":			[39, 45],
     				"Hero0WalkLeft":			[65, 70],
     				"Hero0WalkUp": 				[26, 29],
     				"Hero0WalkRight": 			[30, 35],
                    "Hero0SwordUp":             [6,8],
     				"Hero0SwordDown":           [3,5],
     				"Hero0SwordLeft":           [0, 2],
                    "Hero0SwordRight":          [9, 11]
     				}
     });