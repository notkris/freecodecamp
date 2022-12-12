/* 

solution pseudocode:

accept a string and return a boolean

helper alphanumeric function to remove non-alphanumeric characters with regex and store as lowercase alphanumeric string
initialize left pointer and right pointer to 0 and length - 1 respectively

compare characters in new string, immediately return false if any characters do not match

increment and decrement left and right pointers respectively

if outside loop, return true, as previous comparison did not yet return false 

*/

function palindrome(str) {
	var s = alphanumeric(str).toLowerCase();
	var left = 0;
	var right = s.length - 1;

	while (left < right) {
		if (s.charAt(left) != s.charAt(right)) {
			return false;
		}
		left += 1;
		right -= 1;
	}
	return true;
}

function alphanumeric(str) {
	var a = str;
	var b = a.replace(/[^a-z0-9]/gi, '');
	return b;
}

console.log("shoe")