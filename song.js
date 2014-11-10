var Song = {
	songURL : null,
	time : 0,
	artistName : null,
	artistTwitter : null,
	init: function (songName){},
	_getSongURL: function(){
		var url =  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175780874&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false";
		return url;
	}
}