class Game {
	constructor(){
		this.emotionList = [];
	}

	gameStart(){

	}
	glowEmotion(face){
		var image = $("#"+face);
		image.animate({
			opacity: 1
		}, 250);
		image.animate({
			opacity: 0.25
		}, 250);

	}
}
