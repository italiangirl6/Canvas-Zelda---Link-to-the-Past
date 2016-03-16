 
 // Dependant on Multiple Detect
var keys = [];

function checkKeyUp(e){
	
	switch(e.keyCode){
		case 37: // Left Arrow Release
				console.log("Left key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleLeft");
		break;
		case 39: // Right Arrow Release
				console.log("Right key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleRight");
		break;
		case 40: // Down Arrow Release
				console.log("Down key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleDown_Shield");
		break;
		case 38: // Up Arrow Release
				console.log("Up key was Released");
				HeroPlay0.gotoAndPlay("Hero0WalkIdleUp");
		break;
	}
	
	// Dependant on Multiple Keystroke Detection
	keys[e.keyCode] = false;
}



function checkKeyDown(e) {
	// Default Current state
	var charAnimation = HeroPlay0.currentAnimation;
	
	// Store an entry for every key pressed
	// This is dependant on Multiple Key Stroke Detection
	// checkKeyUp() needs to state this as false
	keys[e.keyCode] = true;
	
	// Set Default Speed
	var charWalkSpeed = 5;
	
	switch(e.keyCode){
		case 87: // W Key Pressed (Woooaaaah!)
			 	console.log("w key was pressed");
				charAnimation = "Hero0FallWhooooooaaaoowh";
		break;
		
		case 37: // Left Arrow Key Pressed
				console.log("Left key was pressed");
				// HeroPlay0.gotoAndPlay("Hero0WalkLeft");
		  		HeroPlay0.x += -charWalkSpeed;
				  charAnimation = "Hero0WalkLeft";
		break;
		
		case 39: // Right Arrow Key Pressed 
				console.log("Right key was pressed");
		 		 HeroPlay0.x += charWalkSpeed;
		 		 charAnimation = "Hero0WalkRight";
		break;
		
		case 40: // Down Arrow Key Pressed 
			console.log("Down key was pressed");
			 	HeroPlay0.y += charWalkSpeed;
			 	//HeroPlay0.y = playerStartY;
			 	charAnimation = "Hero0WalkDown";
		break;
		
		case 38: // Up Arrow Key Pressed 
			console.log("Up key was pressed");
		 		HeroPlay0.y += -charWalkSpeed;
		 		charAnimation = "Hero0WalkUp";
		break;
	}
			// Diagnal Down Right
			if(keys[40] && keys[39]){
				console.log("Down & Right key was pressed");
			 	HeroPlay0.y += charWalkSpeed;
			 	HeroPlay0.x += charWalkSpeed;
			 	charAnimation = "Hero0WalkDown";
			}
			
			// Diagnal Down left
			if(keys[40] && keys[37]){
				console.log("Down & Left key was pressed");
			 	HeroPlay0.y += charWalkSpeed;
			 	HeroPlay0.x += -charWalkSpeed;
			 	charAnimation = "Hero0WalkDown";
			}
			
			// Diagnal up Right
			if(keys[38] && keys[39]){
				console.log("Up & Right key was pressed");
			 	HeroPlay0.y += -charWalkSpeed;
			 	HeroPlay0.x += charWalkSpeed;
			 	charAnimation = "Hero0WalkUp";
			}
			// Diagnal up Left
			if(keys[38] && keys[37]){
				console.log("Up & Left key was pressed");
			 	HeroPlay0.y += -charWalkSpeed;
			 	HeroPlay0.x += -charWalkSpeed;
			 	charAnimation = "Hero0WalkUp";
			}
			
			// Allows for Animation to continue while holding Keys
			// Very Very Very important!
			if(charAnimation != HeroPlay0.currentAnimation){
				HeroPlay0.gotoAndPlay(charAnimation);
			}
			
}

function checkKeyPress(e) {
	
	switch(e.keyCode){
		case 87: // W Key Pressed (Woooaaaah!)
			 	console.log("w key was pressed");
				HeroPlay0.gotoAndPlay("Hero0FallWhooooooaaaoowh");
		break;
		
		case 37: // Left Arrow Key Pressed
				console.log("Left key was pressed");
				HeroPlay0.x += -charWalkSpeed;
				HeroPlay0.gotoAndPlay("Hero0WalkLeft");
		break;
		
		case 39: // Right Arrow Key Pressed 
				console.log("Right key was pressed");
				 HeroPlay0.gotoAndPlay("Hero0WalkRight");
		break;
		
		case 40: // Down Arrow Key Pressed 
			console.log("Down key was pressed");
			 	HeroPlay0.gotoAndPlay("Hero0WalkDown");
		break;
		
		case 38: // Up Arrow Key Pressed 
			console.log("Up key was pressed");
		 		HeroPlay0.gotoAndPlay("Hero0WalkUp");
		break;
	}
}