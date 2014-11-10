var GameText = {
	init : function (){},
	_help: function() {
		var menuArray = [];
		menuArray[0] = "%c{yellow}Music And Rogue Countdown version 0.1 (MARC 0.1)";
		menuArray[1] = "%c{lightblue}================================================";
        menuArray[2] =  "[ArrowKeys] Move";
        menuArray[3] =  "[Spacebar] Examine something";
        menuArray[4] =  "[9] Quits";
        menuArray[5] = "Press [6] to find out RogueLikeRadio";
        return menuArray;
	},
	_about: function() {
		var menuArray = [];
		menuArray[0] = "%c{yellow}Music And Rogue Countdown version 0.1 (MARC 0.1)";
		menuArray[1] = "%c{lightblue}================================================";
        menuArray[2] =  "%c{green}Thanks to :";
        menuArray[3] =  "%c{green}Rot.js (Roguelike JS engine)";
        menuArray[4] =  "%c{green}Darren Grey and the RoguelikeRadio team";
        menuArray[5] =  "%c{green}http://www.abundant-music.com/ (Procedural Music Generator)";
        menuArray[6] =  "%c{green}youtube and Soundcloud";
	},
	_menu: function() {
		var menuArray = [];
		menuArray[0] = "%c{yellow}Music And Rogue Countdown version 0.1 (MARC 0.1)";
		menuArray[1] = "%c{lightblue}================================================";
        menuArray[2] =  "Press [1] to go play";
        menuArray[3] =  "Press [2] for help";
        menuArray[4] =  "Press [3] to find out how this was made";
        menuArray[5] =  "Press [4] to find out about RogueLikes";
        menuArray[6] =  "Press [5] to find out about ProcJam";
        menuArray[7] = "Press [6] to find out RogueLikeRadio";
		return menuArray;
	}
}