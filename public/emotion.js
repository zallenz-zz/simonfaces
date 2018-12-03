/*
Takes: emotions, expressions
Returns: "happy", "sad", "angry", "surprised", "neutral"
*/
function guessEmotion(emotions, expressions)
{
	if(getHappy(emotions))
		return "happy";
	else if(getAnger(emotions, expressions))
		return "angry";
	else if(getSad(emotions, expressions))
		return "sad";
	else if(getSurprised(emotions, expressions))
		return "surprised";
	else
		return "neutral";
}
function getHappy(emotions){
	if (emotions["joy"] > 80)
		return true;
	return false;
}
function getSad(emotions, expressions){
	if (emotions["sadness"] > 80 || expressions["lipCornerDepressor"] > 80)
		return true;
	return false;
}
function getAnger(emotions){
	if(emotions["anger"] > 80)
		return true;
	return false;
}
function getSurprised(emotions){
	if(emotions["surprise"] > 80)
		return true;
	return false;
}