class Game {
	constructor(){
		this.resetGame();
	}
	resetGame(){
		this.emotionList = [];
		this.score = 0;
		this.addNewEmotion();
		this.gameover = false;
		this.acceptAnswers = false;
		this.answerProgress = 0;
	}

	start(){
		this.queryEmotionList();
		this.acceptAnswers = true;
	}

	checkAnswer(){
		if(this.acceptAnswers){
			var curremotion = this.parseEmotion();
			if(curremotion == this.emotionList[this.answerProgress]){
				this.answerProgress++;
				if(this.answerProgress <= this.score)
					return true;
				else{
					this.score++;
					this.answerProgress = 0;
					return "done";					
				}
			}
			else{
				this.answerProgress = 0;
				return false;
			}
		}
	}
	parseEmotion(){
		var curremotion = $("#info > strong").html();
		return curremotion;
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
			var audio = new Audio("../assets/" + face + ".mp3");
			audio.play();
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
		var max = this.emotionList.length;
		function f(game) {
			var currface = game.emotionList[i];

			game.glowEmotion(currface);
			game.playEmotionSound(currface);
		    i++;
		    if(i < max)
		        setTimeout(f, 1000, game);
		    else{
		    	game.addNewEmotion();
		    }
		}
		f(this);
	}
	addNewEmotion(){
		var newEmotion = this.randomEmotion();
		this.emotionList.push(newEmotion);
		this.displayScore();
	}
	displayScore(){

		$("#score").html("<strong>Score: " + this.score + "</strong>");
	}

}
