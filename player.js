var Player = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
}

Player.prototype.getSpeed = function() { return 100; }
Player.prototype.getX = function() { return this._x; }
Player.prototype.getY = function() { return this._y; }

Player.prototype.act = function() {
    Game.engine.lock();
    window.addEventListener("keydown", this);
}
    
Player.prototype.handleEvent = function(e) {
    if (this.gameState == 2)
        return;

    var code = e.keyCode;
    if (code == 13 || code == 32) {
        this._checkBox();
        return;
    }

    $("#gameText").text(this.food);
    this.gameRound++;
    //Game.display.draw(10,10,this.food);
    
    var code = e.keyCode;
    //alert(code);
    if (code == 52) {
        if (confirm("Do you want to quit?")){
        //alert(quit);
        //$("#playerDiv").hide();
        Game._drawMenu();
        }
        //return;
    }

    var keyMap = {};
    keyMap[38] = 0;
    keyMap[33] = 1;
    keyMap[39] = 2;
    keyMap[34] = 3;
    keyMap[40] = 4;
    keyMap[35] = 5;
    keyMap[37] = 6;
    keyMap[36] = 7;

    /* one of numpad directions? */
    if (!(code in keyMap)) { return; }

    /* is there a free space? */
    var dir = ROT.DIRS[8][keyMap[code]];
    var newX = this._x + dir[0];
    var newY = this._y + dir[1];
    var newKey = newX + "," + newY;
    if (!(newKey in Game.map)) { return; }



    Game.display.draw(this._x, this._y, Game.map[this._x+","+this._y]);
    this._x = newX;
    this._y = newY;
    this._draw();

    window.removeEventListener("keydown", this);
    Game.engine.unlock();
}

Player.prototype._draw = function() {
    Game.display.draw(this._x, this._y, "@", "#ff0");
}
    
Player.prototype._checkBox = function() {
    var key = this._x + "," + this._y;
    this.gameRound
    if (Game.map[key] == "w") {
        $("#gameText").text("Food");
        this.food++;
    }
    else if (Game.map[key] == "d") {
        $("#gameText").text("There is no box here!");
        Game._newLevel();
    }else if (Game.map[key] != "*") {
        $("#gameText").text("There is no box here!");
    } else if (key == Game.gold) {
        $("#gameText").text("Hooray! You found an gold and won this game.");
        this.gameState = 2;
        Game.engine.lock();
        window.removeEventListener("keydown", this);
    } 
    else {
        $("#gameText").text("This box is empty :-(");
    }
}