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
    HighlightObject: function(){

    // Change button to remove Circle if added
//    document.getElementById("debugButton").onclick = zeldaDebugger.DebuggerOff;
//    document.getElementById("debugButton").setAttribute( "onclick", "zeldaDebugger.DebuggerOff()");
     //Create a Shape DisplayObject.
        if(!addedDebugObjects){
        circle = new createjs.Shape();
        } else {}
        var shiftCircleXY = 42.6;
        circle.graphics.beginStroke("#FFF").drawCircle(0, 0, 30);
        document.getElementById("debugButton").onclick = zeldaDebugger.DebuggerOff;

        //Set position of Shape instance.
        circle.x = HeroXCoordinates + shiftCircleXY;
        circle.y = HeroYCoordinates + shiftCircleXY;

     // Create Text Stats
         var shiftTextXY = 30;
         var fontTextSize = 10;

         // Add Text if you have not yet.
         // If you have just update the stats
         if(!addedDebugObjects){
         xCoord = new createjs.Text("X: " + HeroXCoordinates, fontTextSize + "px Arial", "#FFF");
         yCoord = new createjs.Text("Y: " + HeroYCoordinates, fontTextSize + "px Arial", "#FFF");
         } else {
         xCoord.text = "X: " + HeroXCoordinates;
         yCoord.text = "Y: " + HeroYCoordinates;
         zelda.stageUpdate();
         }


         xCoord.x = (circle.x + 2) + shiftTextXY;
         xCoord.y = (circle.y - 2) - (shiftTextXY + 6);
         yCoord.y = xCoord.y + (shiftTextXY / 2);
         yCoord.x = xCoord.x;

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
        debugModOn = true;
        addedDebugObjects = false;
    },

    DebuggerOff: function(){
     zeldaDebugger.RemoveHighlight;
     debugModOn = false;
    }

    //#endregion


};