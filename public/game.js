class Game {
	constructor(){
		this.emotionList = [];
		this.score = 0;
		this.emotionList.push(this.addNewEmotion());
		this.gameover = false;
	}

	start(){
		while(!this.gameover){
			this.queryEmotionList();
			this.acceptAnswers();
		}
	}
	acceptAnsweers(){
		
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
	playEmotionSound(face){
		if (face != undefined){
			var audio = new Audio("../assets/" + face + ".mp3");
			audio.play();
		}
	}
	randomEmotion(){
		var rand = Math.floor(Math.random() * Math.floor(4));
		if(rand == 0)
			return "happy";
		else if(rand == 1)
			return "sad";
		else if(rand == 2)
			return "angry";
		else
			return "surprised";
	}

	queryEmotionList(){
		var i = 0;
		function f(game) {
			var currface = game.emotionList[i];
			game.glowEmotion(currface);
			game.playEmotionSound(currface);
		    i++;
		    if(i < game.emotionList.length)
		        setTimeout(f, 400, game);
		    else
		    	game.addNewEmotion();
		}
		f(this);
	}
	addNewEmotion(){
		var newEmotion = this.randomEmotion();
		this.emotionList.push(newEmotion);
		this.score++;
		this.displayScore();
	}
	displayScore(){
		var userscore = this.score - 1;
		$("#score").html("<strong>Score: "+ userscore + "</strong>");
	}
	writeGuess(guess){
		$("#info").html("<strong>You look pretty " + guess+ "right now!");
	}
}
