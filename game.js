var Game = {
    display: null,
    map: {},
    engine: null,
    player: null,
    musicPlayer: null,
    orc: null,
    gold: null,
    gameText: null,
    gameState: 0,
    gameRound: 0,
    timer: 0,
    songs: {},
    init: function() {
        $("#DedicationDiv").fadeOut(2000);
        $("#MainDiv").fadeOut(0);
        $("#MainDiv").fadeIn(2000);
        Game.display = new ROT.Display({spacing:1.1});
        document.body.appendChild(this.display.getContainer());
        
        this._drawMenu();
    },
    _startGame: function ()  {
        this._newLevel();
    },
    _newLevel: function ()  {
        $("#gameScreen").append(this.display.getContainer());
        //$("#gameScreen")["widget"].pause();
        Game.display.clear();
        
        musicPlayer = $("#playerDiv");
        
        //musicPlayer = SC.Widget("playerDiv");

        musicPlayer.attr("src",Song._getSongURL());

        this._generateMap();
        var time = 100;
        this.gameState = 1;
        var self = this;
        timer = window.setInterval(function() {

            if(time>0){
            time--;
            var timeString =  time.toString();
            $("#gameTime").text(timeString);
            }
            else
            {
                console.log("game over - time out");
            }
        }, 1000);

        var scheduler = new ROT.Scheduler.Simple();
        scheduler.add(this.player, true);
        scheduler.add(this.orc, true);

        this.engine = new ROT.Engine(scheduler);
        this.engine.start();
    },
     _drawMenu: function () {
        //this.display.clear();
        musicPlayer = $("#playerDiv");
        musicPlayer.attr("src","");

        Game.display.clear();
        var menuArray = GameText._menu();
        for(var i=0;i<menuArray.length;i++)
        {
           Game.display.drawText(1,i+1, menuArray[i]);        
        }

        window.addEventListener("keydown", this);
        
    },
    _displayHelp: function () {
        //this.display.clear();
        //this.display.clear();
        //gameText = new GameText();
        Game.display.clear();
        var text = GameText._help();
         for(var i=0;i<text.length;i++)
        {
           Game.display.drawText(1,i+1, text[i]);        
        }
        
        //alert("hey");
        window.addEventListener("keydown", this);
        
    },
    _displayAbout: function () {
        //this.display.clear();
        //this.display.clear();
        Game.display.clear();
        Game.display.drawText(1,1, "%c{yellow}ROGUE1");
        Game.display.drawText(1,2, GameText._about());
       
        GGame.display.drawText(1,4, "Press [4] to go back to Menu");
        
        //alert("hey");
        window.addEventListener("keydown", this);
        
    },
    handleEvent: function (e) {

    //This is the game menu event handler
    var code = e.keyCode;
    console.log(code);
    switch(code)
        {
        case 49:
            this._startGame();
            break;
        case 50://2
            this._displayHelp();
            break;
        case 51://3
            this._displayAbout();
            break;
        case 52://4
            this._drawMenu();
            break;
        }
    },
    _sleep: function(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    },
    _update: function() {
        this.time--;
        var timeString =  this.time.toString();
        $("#gameTime").text(timeString);
    },
    _generateMap: function() {
        var digger = new ROT.Map.Digger();
        var freeCells = [];
        
        var digCallback = function(x, y, value) {
            if (value) { return; }
            
            var key = x+","+y;
            this.map[key] = ".";
            freeCells.push(key);
        }
        digger.create(digCallback.bind(this));
        
        this._generateBoxes(freeCells);
        this._generateWeapons(freeCells);
        this._generateDoor(freeCells);
        this._drawWholeMap();
        
        this.player = this._createBeing(Player, freeCells);
        this.orc = this._createBeing(orc, freeCells);
    },
    
    _createBeing: function(what, freeCells) {
        var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
        var key = freeCells.splice(index, 1)[0];
        var parts = key.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        return new what(x, y);
    },
    
    _generateBoxes: function(freeCells) {
        for (var i=0;i<10;i++) {
            var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
            var key = freeCells.splice(index, 1)[0];
            this.map[key] = "*";
            if (!i) { this.gold = key; } /* first box contains an gold */
        }
    },
    _generateWeapons: function(freeCells) {
        for (var i=0;i<10;i++) {
            var index = Math.floor(ROT.RNG.getUniform() * 100);
            var key = freeCells.splice(index, 1)[0];
            this.map[key] = "w";
            if (!i) { this.gold = key; } /* first box contains an gold */
        }
    },
    _generateDoor: function(freeCells) {
        //for (var i=0;i<10;i++) {
            var index = Math.floor(ROT.RNG.getUniform() * 100);
            var key = freeCells.splice(0, 1)[0];
            this.map[key] = "d";
          //  if (!i) { this.gold = key; } /* first box contains an gold */
    },
    _drawWholeMap: function() {
        for (var key in this.map) {
            var parts = key.split(",");
            var x = parseInt(parts[0]);
            var y = parseInt(parts[1]);
            var tile = this.map[key];
            //todo based on tile draw the color unless we have the value from the map item
            this.display.draw(x, y, this.map[key]);
        }
    }
};


    

    
var orc = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
}
    
orc.prototype.getSpeed = function() { return 100; }
    
orc.prototype.act = function() {
    var x = Game.player.getX();
    var y = Game.player.getY();

    var passableCallback = function(x, y) {
        return (x+","+y in Game.map);
    }
    var astar = new ROT.Path.AStar(x, y, passableCallback, {topology:4});

    var path = [];
    var pathCallback = function(x, y) {
        path.push([x, y]);
    }
    astar.compute(this._x, this._y, pathCallback);

    path.shift();
    if (path.length == 1) {
        Game.engine.lock();

        console.log("game over - time out Game over - you were captured by the orc!");
        clearInterval(timer);
        //this._sleep(1000);
        Game._drawMenu();
        this.gameState = 2;
    } else {
        x = path[0][0];
        y = path[0][1];
        Game.display.draw(this._x, this._y, Game.map[this._x+","+this._y]);
        this._x = x;
        this._y = y;
        this._draw();
    }
}
    
orc.prototype._draw = function() {
    Game.display.draw(this._x, this._y, "O", "red");
}    


window.onload = function () {
    // Check if rot.js can work on this browser
    if (!ROT.isSupported()) {
        $("#gameText").text("The rot.js library isn't supported by your browser.");
    }
    else {
        Game.init();
    }
}
//todo next branch lets get the color into the map so instead of "*" we used "*,red" etc...
    