class Game {
	constructor(){
		this.resetGame();
	}

	start(){
		this.queryEmotionList();
		this.acceptAnswers = true;
	}
	checkAnswer(){
		if(this.acceptAnswers){
			if(this.answerProgress < this.emotionList.length-2){
				var curremotion = this.parseEmotion();
				console.log(curremotion, this.emotionList[this.answerProgress]);
				if(curremotion == this.emotionList[this.answerProgress]){
					this.answerProgress++;
					return true;
				}
				else{
					this.answerProgress = 0;
					return false;
				}
			}
			else{
				this.answerProgress = 0;
				return "done";
			}
		}
	}
	parseEmotion(){
		var curremotion = $("#info > strong").html();
		return curremotion;
	}
	resetGame(){
		this.emotionList = [];
		this.score = 0;
		this.addNewEmotion();
		this.gameover = false;
		this.acceptAnswers = false;
		this.answerProgress = 0;
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
		console.log(this.emotionList);
		this.score++;
		this.displayScore();
	}
	displayScore(){
		var userscore = this.score - 1;
		$("#score").html("<strong>Score: "+ userscore + "</strong>");
	}

}
