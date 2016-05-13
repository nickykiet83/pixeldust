var playlist = new Playlist();

var thatswhy = new Song("That's why", "MLTR", "3:00");
var yesterday = new Song("Yesterday", "Beatles", "3:50");

playlist.add(thatswhy);
playlist.add(yesterday);

var playlistElement = document.getElementById('playlist');


playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function(){
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById('next');
nextButton.onclick = function(){
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
	playlist.stop();
	playlist.renderInElement(playlistElement);
}
