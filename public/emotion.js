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
//	console.log(emotions, expressions);
	return "happy";

}