var Song = {
	songURL : null,
	time : 0,
	artistName : null,
	artistTwitter : null,
	init: function (songName){},
	_getSongURL: function(){
		var songArray = [];
//employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
		songArray[0] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175780874&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:140,artist:"Dom"};
		songArray[1] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177128725&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:140,artist:"Dom"};
		songArray[2] = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177131079&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false",time:140,artist:"Dom"};
	
		var indexMax = songArray.length;
		var randomIndex = Math.floor(Math.random() * indexMax);
		songURL = songArray[randomIndex].url;

		return songArray[randomIndex];
	}
}