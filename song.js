var Song = {
	songURL : null,
	time : 0,
	artistName : null,
	artistTwitter : null,
	init: function (songName){},
	_getSongURL: function(level){
		var songArray = [];

		songArray[4] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177159513&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:60,artist:"Dom"};
		songArray[3] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175780874&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:90,artist:"Dom"};
		songArray[2] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177128725&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:123,artist:"Dom"};
	    songArray[1] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177131079&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:164,artist:"Dom"};
	    songArray[0] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177159515&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:192,artist:"Dom"};
	
		var indexMax = songArray.length;
		//var randomIndex = Math.floor(Math.random() * indexMax);
		songURL = songArray[level-1].url;

		return songArray[level-1];
	}
}

/*
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177159513&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175780874&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177128725&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
177159515
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177159515&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177131079&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177131079&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
*/