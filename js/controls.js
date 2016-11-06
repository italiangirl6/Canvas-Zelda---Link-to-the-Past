 
 // Dependant on Multiple Detect
var keys = [];
var charAnimation;
var matrixStats;

// Key Released - Keep on Top
// This will assist in setting Idle when attack is finished
function checkKeyUp(e){

	switch(e.keyCode){
		case 37: // Left Arrow Release
//				console.log("Left key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleLeft");
//                ConsoleLinkPosition();
//                ConsoleMapPosition();

		break;
		case 32: // Space Bar Release
//				console.log("Space key was Released");

                matrixStats =  charAnimation;
                console.log("Log > " + matrixStats);

                switch(charAnimation){
                    case "Hero0SwordUp":
                    HeroPlay0.gotoAndPlay("Hero0WalkIdleUp");
                    break;
                    case "Hero0SwordDown":
                    HeroPlay0.gotoAndPlay("Hero0WalkIdleDown_Shield");
                    break;
                    case "Hero0SwordRight":
                    HeroPlay0.gotoAndPlay("Hero0WalkIdleRight");
                    break;
                    case "Hero0SwordLeft":
                    HeroPlay0.gotoAndPlay("Hero0WalkIdleLeft");
                    break;
                }

                matrixStats =  charAnimation;
                console.log("After Animqtion > " + matrixStats);

		break;
		case 39: // Right Arrow Release
//				console.log("Right key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleRight");
//				ConsoleLinkPosition();
		break;
		case 40: // Down Arrow Release
//				console.log("Down key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleDown_Shield");
//				ConsoleLinkPosition();
		break;
		case 38: // Up Arrow Release
//				console.log("Up key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleUp");
//				ConsoleLinkPosition();
		break;
		case 80: // p
//            console.log("p key was Released");
            rand_no = Math.ceil(400*Math.random());
            rand_no2 = Math.ceil(400*Math.random());

            var randomDump = ["Bomb0", "Ruby50", "Ruby100", "Ruby300"];
            var randSelect = randomDump[Math.floor(Math.random() * randomDump.length)];

            TileObjects.itemDrop(randSelect, rand_no, rand_no2);
//            zelda.stageLoad("remove", "selectedItemBar");
		break;
		case 90: // z
		    zeldaDebugger.ConsoleLinkPosition();
		break;
	}

	// Dependant on Multiple Keystroke Detection
	keys[e.keyCode] = false;
}

// Key Held Down
function checkKeyDown(e) {
	// Default Current state
	charAnimation = HeroPlay0.currentAnimation;
	
	// Store an entry for every key pressed
	// This is dependant on Multiple Key Stroke Detection
	// checkKeyUp() needs to state this as false
	keys[e.keyCode] = true;
	
	// Set Default Speed
	var charWalkSpeed = 5;

	// Set XY Coordinates
	HeroYCoordinates = HeroPlay0.y;
	HeroXCoordinates = HeroPlay0.x;
	
	switch(e.keyCode){
		case 87: // W Key Pressed (Woooaaaah!)
//			 	console.log("w key was pressed");
				charAnimation = "Hero0FallWhooooooaaaoowh";
		break;

        case 32: // Space Key Pressed
//                console.log("Space key was pressed");
                matrixStats =  charAnimation;
//                console.log("Log > " + matrixStats);
                if(charAnimation == "Hero0WalkIdleUp"){
                    charAnimation = "Hero0SwordUp";
                } else if(charAnimation == "Hero0WalkIdleDown_Shield"){
                    charAnimation = "Hero0SwordDown";
                }   else if(charAnimation == "Hero0WalkIdleLeft"){
                    charAnimation = "Hero0SwordLeft";
                }
                else if(charAnimation == "Hero0WalkIdleRight"){
                    charAnimation = "Hero0SwordRight";
                }

        break;

		case 37: // Left Arrow Key Pressed
//				console.log("Left key was pressed");
				// HeroPlay0.gotoAndPlay("Hero0WalkLeft");
		 		HeroXCoordinates = HeroPlay0.x += -charWalkSpeed;
				charAnimation = "Hero0WalkLeft";

                // Set Camera
                // Varable in Engine>Zelda>Camera
                rectangle.x = rectangle.x -= charWalkSpeed;

                // Pan Map & Sync HeaderBar

                // Set Map
                // We also check the coordinates
                // If less or equal to Negative Seventy Five, that will show canvas
                // Set to Negative Seventy Five to prevent
                if(currentMap.parent.x.between(59, 63)){
                    currentMap.parent.x = 60;
                } else {
                    currentMap.parent.x = currentMap.parent.x += charWalkSpeed;
                    headLoader.MoveMenuBarX(-charWalkSpeed);
                }

		break;
		
		case 39: // Right Arrow Key Pressed 
//				console.log("Right key was pressed");
//		  		 console.log("Hero X: "+ HeroXCoordinates);
		  		 HeroXCoordinates = HeroPlay0.x += charWalkSpeed;
		 		 charAnimation = "Hero0WalkRight";

		 		 // Set Camera
                 // Varable in Engine>Zelda>Camera
                 rectangle.x = rectangle.x += charWalkSpeed;

                // Set Map
                // We also check the coordinates
                // If greater or equal to Sixty, that will show canvas
                // Set to Sixty to prevent
                if(currentMap.parent.x.between(-73, -78)){
                    currentMap.parent.x = -75;
                } else {
                    currentMap.parent.x = currentMap.parent.x += -charWalkSpeed;
                    headLoader.MoveMenuBarX(charWalkSpeed);
                }

		break;
		
		case 40: // Down Arrow Key Pressed 
//			console.log("Down key was pressed");
                 HeroYCoordinates = HeroPlay0.y;
		  		 HeroYCoordinates = HeroPlay0.y += charWalkSpeed;
//		  		 console.log("Hero y: "+ HeroYCoordinates);
                charAnimation = "Hero0WalkDown";

                // Set Camera
                // Varable in Engine>Zelda>Camera
                rectangle.y = rectangle.y += charWalkSpeed;

                  // Set Map
                  // We also check the coordinates
                  // If less or equal to zero, that will show canvas
                  // Set to Zero to prevent
                  if(currentMap.parent.y <= 0){
                    currentMap.parent.y = 0;
                  } else {
                    currentMap.parent.y = currentMap.parent.y += -charWalkSpeed;
                    headLoader.MoveMenuBarY(charWalkSpeed);
                  }

		break;
		
		case 38: // Up Arrow Key Pressed 
//			console.log("Up key was pressed");
                HeroYCoordinates = HeroPlay0.y;
		 		HeroYCoordinates = HeroPlay0.y += -charWalkSpeed;
		 		charAnimation = "Hero0WalkUp";

                // Set Camera
                // Varable in Engine>Zelda>Camera
                rectangle.y = rectangle.y += -charWalkSpeed;

                // Set Map
                // We also check the coordinates
                // If greater or equal to Twenty, that will show canvas
                // Set to Twenty to prevent
                if(currentMap.parent.y >= 20){
                    currentMap.parent.y = 20;
                } else {
                    currentMap.parent.y = currentMap.parent.y += charWalkSpeed;
                    headLoader.MoveMenuBarY(-charWalkSpeed);
                }

		break;
	}
	// Handling Multiple Keys
			// Diagnal Down Right
			if(keys[40] && keys[39]){
//				console.log("Down & Right key was pressed");
                if(HeroYCoordinates == 300 || HeroXCoordinates == (-80)){} else {
                    HeroPlay0.y += charWalkSpeed;
                    HeroPlay0.x += charWalkSpeed;

                    // Set Camera
                    // Varable in Engine>Zelda>Camera
                        rectangle.y += charWalkSpeed;
                        rectangle.x += charWalkSpeed;
                }
			 	charAnimation = "Hero0WalkDown";
			}
			
			// Diagnal Down left
			if(keys[40] && keys[37]){
//				console.log("Down & Left key was pressed");
                if(HeroYCoordinates == 300 || HeroXCoordinates == (-80)){} else {
                    HeroPlay0.y += (charWalkSpeed - 1);
                    HeroPlay0.x += (-charWalkSpeed - 1);

                    // Set Camera
                    // Varable in Engine>Zelda>Camera
                        rectangle.y += (charWalkSpeed - 1);
                        rectangle.x += (-charWalkSpeed - 1);
                }
			 	charAnimation = "Hero0WalkDown";

			 	// Set Map
//                headLoader.MoveMenuBarY((charWalkSpeed - 1));
//                headLoader.MoveMenuBarX((-charWalkSpeed - 1);

			}
			
			// Diagnal up Right
			if(keys[38] && keys[39]){
//				console.log("Up & Right key was pressed");
                if(HeroXCoordinates == 430 || HeroXCoordinates > 430 || HeroYCoordinates == -65 || HeroYCoordinates < -65){} else {
                    HeroPlay0.y += -charWalkSpeed;
                    HeroPlay0.x += charWalkSpeed;

                    // Set Camera
                    // Varable in Engine>Zelda>Camera
                            rectangle.y += -charWalkSpeed;
                            rectangle.x += charWalkSpeed;
                }
			 	charAnimation = "Hero0WalkUp";
			}

			// Diagnal up Left
			if(keys[38] && keys[37]){
//				console.log("Up & Left key was pressed");
                if(HeroXCoordinates == 430 || HeroYCoordinates == -65){} else {
                HeroPlay0.y += -charWalkSpeed;
                HeroPlay0.x += -charWalkSpeed;

                // Set Camera
                // Varable in Engine>Zelda>Camera
                        rectangle.y += -charWalkSpeed;
                        rectangle.x += -charWalkSpeed;
                }
			 	charAnimation = "Hero0WalkUp";
			}
			
			// Allows for Animation to continue while holding Keys
			// Very Very Very important!
			if(charAnimation != HeroPlay0.currentAnimation){
				HeroPlay0.gotoAndPlay(charAnimation);
			}
    // Set Camera
    // Varable in Engine>Zelda>Camera
        bullseye.x = rectangle.x;
        bullseye.y = rectangle.y;
}

// Key Pressed
function checkKeyPress(e) {
	
	switch(e.keyCode){
		case 87: // W Key Pressed (Woooaaaah!)
//			 	console.log("w key was Held");
				HeroPlay0.gotoAndPlay("Hero0FallWhooooooaaaoowh");
		break;

        case 32: // Space Key Pressed
//                console.log("Space key was Held");
                if(charAnimation == "Hero0WalkIdleDown_Shield"){
                    HeroPlay0.gotoAndPlay("Hero0SwordDown");
                    charAnimation = "Hero0WalkIdleDown_Shield"
                } else if(charAnimation == "Hero0WalkIdleRight"){
                    HeroPlay0.gotoAndPlay("Hero0SwordRight");
                }
                matrixStats = charAnimation;
                console.log("Character Sprite > " + matrixStats);
        break;

		case 37: // Left Arrow Key Pressed
//				console.log("Left key was Held");
//				HeroPlay0.x += -charWalkSpeed;
//				HeroPlay0.gotoAndPlay("Hero0WalkLeft");
		break;
		
		case 39: // Right Arrow Key Pressed 
//				console.log("Right key was Held");
		break;
		
		case 40: // Down Arrow Key Pressed 
//			console.log("Down key was Held");
		break;
		
		case 38: // Up Arrow Key Pressed 
//			console.log("Up key was Held");
		break;
		case 80: // p pressed
//            console.log("p key was Held");
        break;
	}
}

