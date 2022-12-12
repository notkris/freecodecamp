/*

define alphabet to loop through characters

if current character is in defined alphabet decrypt character
determine position to move to (13 forward and looping in this case)
replace character and concatenate to result

if current character is not in defined alphabet allow character to pass
and concatenate to result

return fully decrypted result

*/

function rot13(str) {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = '';
	var msgPosition;

	for (var i = 0; i <= str.length - 1; i++) {
		if (alphabet.indexOf(str.charAt(i)) > -1) {
			msgPosition = alphabet.indexOf(str.charAt(i)) + 13;
			if (msgPosition >= 26) {
				msgPosition -= 26;
			}
			result += alphabet.charAt(msgPosition);
		}
		if (alphabet.indexOf(str.charAt(i)) == -1) {
			result += str.charAt(i);
		}
	}
	return result;
};