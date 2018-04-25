var audio = [];
var titles = [];

addSong("songo", "Bag Raiders - Shooting Stars");
addSong("wivship", "Waveshaper - A Picture in Motion");
addSong("disdes", "Crypt of the NecroDancer - Disco Descent");
addSong("beindinz", "Animals as Leaders - The Brain Dance");

audio.volume = document.getElementById("volumeSlider").value;
var index = 0;
setTitle();
var playing = false;
function addSong(id, title){ //elementId, song title
	audio.push(document.getElementById(id));
	titles.push(title);
}

function nextSong(){
	audio[index].pause();
	index++;
	if(index === audio.length){
		index = 0;
	}
	update();
	if(playing === true){
		playSong();
	}
    	audio[index].volume = document.getElementById("volumeSlider").value;
}

function prevSong(){
	audio[index].pause();
	index--;
	if(index < 0){
		index = audio.length - 1;
	}
	update();
	if(playing === true){
		playSong();
	}
   	 audio[index].volume = document.getElementById("volumeSlider").value;
}

function update(){
	setTitle();
	audio[index].load();
}

function setTitle(){
	document.getElementById("songTitleBox").innerText = "Background Song: " + titles[index];
	document.getElementById("songTitleBox").style.fontWeight = 'bold';
}

function changeVolume(){
    audio[index].volume = document.getElementById("volumeSlider").value;
}

function playSong(){
    audio[index].play();
    playing = true;
}

function pauseSong(){
    audio[index].pause();
    playing = false;
}
