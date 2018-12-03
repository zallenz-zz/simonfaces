/*
Takes: JSON.stringify(faces[0].emotions, function(key, val) {
            return val.toFixed ? Number(val.toFixed(0)) : val;
          }));
          JSON.stringify(faces[0].expressions, function(key, val) {
            return val.toFixed ? Number(val.toFixed(0)) : val;
          }));
Returns: "happy", "sad", "angry", "surprised"
*/
function guessEmotion(emotions, expressions)
{
	// what would the default emotion be if we can't read anything? 
	if (emotions['joy'] > 80) console.log("happy");

	if (emotions['valence'] < -50) console.log("sad");

	if (emotions['anger'] > 80 || expressions['browFurrow'] > 80) console.log("angry");

	if (expressions['lipPucker'] > 20) console.log("surprised");;

	return "neutral";
}