// CONSOLE STATS
var zeldaDebugger = {
    // Link
    ConsoleLinkPosition: function(){
    console.log("Char X: " + HeroXCoordinates + "\n" +
        "Char Y: " + HeroYCoordinates);

    },

    // Capture the XY Path of DropSpecificItem
    ConsoleDropSpecificItem: function(){
    console.log("DroppedItem Y: " + DropSpecificItem + "\n" +
                "Char X: " + DropSpecificItem);
    },

    // Used to highlight area
    HighlightObject: function(target){

    // Change button to remove Circle if added
//    document.getElementById("debugButton").onclick = zeldaDebugger.DebuggerOff;
//    document.getElementById("debugButton").setAttribute( "onclick", "zeldaDebugger.DebuggerOff()");
     //Create a Shape DisplayObject.
        if(!addedDebugObjects){
        circle = new createjs.Shape();
        } else {}
        var shiftCircleXY = 42.6;
        circle.graphics.beginStroke("#FFF").drawCircle(0, 0, 30);

        var followObject = true;

        // Setup debug for specific object
        target = target.toLowerCase();
        switch(target){
            case "link":
                target = [HeroXCoordinates, HeroYCoordinates, Hero0Sprite];
                break;
            case "map":
                target = [currentMap.parent.x, currentMap.parent.y, currentMap.parent];
                followObject = false;
                break;
        }
        //Set position of Shape instance.
        if(!followObject){
            circle.x = HeroXCoordinates + shiftCircleXY;
            circle.y = HeroYCoordinates + shiftCircleXY;
        } else {
            circle.x = target[0] + shiftCircleXY;
            circle.y = target[1] + shiftCircleXY;
        }

     // Create Text Stats
         var shiftTextXY = 30;
         var fontTextSize = 10;

         // Add Text if you have not yet.
         // If you have just update the stats
         if(!addedDebugObjects){
            xCoord = new createjs.Text("X: " + target[0], fontTextSize + "px Arial", "#FFF");
            yCoord = new createjs.Text("Y: " + target[1], fontTextSize + "px Arial", "#FFF");
            frameRateChar = new createjs.Text("FPS: " + target[2].framerate, fontTextSize + "px Arial", "#FFF");
         } else {
            xCoord.text = "X: " + target[0];
            yCoord.text = "Y: " + target[1];
            frameRateChar.text = "FPS: " + target[2].framerate;
            zelda.stageUpdate();
         }

         // Lock-on Object
         if(!followObject){
            xCoord.x = (circle.x + 2) + shiftTextXY;
            xCoord.y = (circle.y - 2) - (shiftTextXY + 6);
            yCoord.y = xCoord.y + (shiftTextXY / 2);
            yCoord.x = xCoord.x;
         } else {
            xCoord.x = (circle.x + 2) + shiftTextXY;
            xCoord.y = (circle.y - 2) - (shiftTextXY + 6);
            yCoord.y = xCoord.y + (shiftTextXY / 2);
            yCoord.x = xCoord.x;
         }

        // If Added Objects Do not add again
        if(!addedDebugObjects){
        //Add Objects
        stage.addChild(circle, xCoord, yCoord);
        addedDebugObjects = true;
        } else {
        }

        //Update stage will render next frame
        stage.update();
    },

    // Remove Debug from screen
    RemoveHighlight: function(){
        stage.removeChild(circle, xCoord, yCoord);
        stage.update();

        // Change button back to Highlight Circle mode
        document.getElementById("debugButton").onclick = zeldaDebugger.DebugOn;

    },

    DebugOn: function(){
        document.getElementById("removeDebugButton").setAttribute("class", "subButtons on");
        document.getElementById("debugButton").setAttribute("class", "subButtons off");
        debugModOn = true;
        addedDebugObjects = false;
    },

    DebuggerOff: function(){
     document.getElementById("removeDebugButton").setAttribute("class", "subButtons off");
     document.getElementById("debugButton").setAttribute("class", "subButtons on");
     stage.removeChild(circle, xCoord, yCoord);
     debugModOn = false;
    }

    //#endregion


};